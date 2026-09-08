import RestroCard, { withPromotedHighOrderComp } from './RestroCard';
import { Search, Filter } from 'lucide-react';
//import resDataList from "../utils/mockData";
import { useState, useEffect } from 'react';
import ShimmerCards from './ShimmerCards';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  let [restroList, setRestroList] = useState([]); //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

  let [restroFilteredList, setRestroFilteredList] = useState([]);


  //USING HIGHER ORDER COMPONENT GOT THE ENHANCED COMPONENT
  const PromotedRestroCard = withPromotedHighOrderComp(RestroCard);


  //useEffect = > takes 2 argument: callback(), depArray.
  useEffect(() => {
    fetchRestroData();
  }, []);

  let checkOnlineStatus = useOnlineStatus();

  let fetchRestroData = async () => {
    let dataStream = await fetch(
      'https://namastedev.com/api/v1/listRestaurants'
    );
    let restroListDataFromApi = await dataStream.json();
    //ADDED Promoted Key and boolean value in API Response BELOW:
    let listData =
      restroListDataFromApi?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (item) => ({
          ...item,
          info: {
            ...item.info,
            promoted: Math.random() < 0.5, // true/false
          },
        })
      );
    //setRestroList(restroListDataFromApi?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setRestroList(listData);
    // console.log(listData);
    /*setRestroFilteredList(
      restroListDataFromApi?.data?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );*/

    setRestroFilteredList(listData);
  };

  function filter4StarAboveRestros() {
    let filteredTopRatedRestroList = restroList.filter(
      (restro) => restro.info.avgRating > 4.5
    );
    console.log(filteredTopRatedRestroList);
    setRestroFilteredList(filteredTopRatedRestroList); //This special utility function get my new filtered data to hook with the current data we are displaying on frontend.
  }

  let [searchBarText, setSearchBarText] = useState('');

  const updateSearchBarText = (event) => {
    setSearchBarText(event.target.value.toLowerCase());
    
    //If user removed all search text then we automatically loads all the restaurants.
    if(event.target.value === ""){
        setRestroFilteredList(restroList);
    }
    //console.log("[A]: "+searchBarText);
  };

  if (!checkOnlineStatus) {
    return <h4>I guess you're offline!!</h4>;
  }
  //Conditional rendering
  if (restroFilteredList.length === 0) {
    return <ShimmerCards />;
  }
  return (
    <div className="body container">
      <div className="searchContainer flex justify-between items-center md:p-5 py-5 md:gap-y-0 gap-y-5 md:flex-row flex-col">
        <div className="md:w-[70%] w-full flex gap-2">
          <input
            type="text"
            name="search"
            placeholder="Search food items..."
            value={searchBarText}
            onChange={updateSearchBarText}
            className="md:w-1/2 w-full border p-1 shadow-sm rounded-md rounded-r-none"
          />
          <button
            type="button"
            className="searchbtn align-middle bg-olive-950 text-white w-[10%] h-full rounded-md  rounded-l-none hover:cursor-pointer p-1"
            onClick={() => {
              let searchedRestroList = restroList.filter((restroObj) =>
                restroObj.info.name
                  .toLowerCase()
                  .includes(searchBarText.toLowerCase())
              ); //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
              setRestroFilteredList(searchedRestroList);
            }}
          >
            <Search className="p-2 size-8 mx-auto hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className='flex gap-2 bg-olive-950 text-white shadow-lg rounded-md items-center flex-nowrap cursor-pointer p-2 group'>
            <button
              type="button"
              className="topratedfilterbtn"
              onClick={filter4StarAboveRestros}
            >
              Top Rated Restraurants
            </button>
            <Filter className="w-5  group-hover:animate-pulse" />
        </div>
        

      </div>
      <div className="restroContainer w-full flex flex-wrap gap-2 justify-center mx-auto">
        {/* <RestroCard resData={resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info}/> */}

        {
          //resDataList.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restro => <RestroCard key={restro.info.id} resData = {restro.info} />)
          restroFilteredList.map((restro) => (
            <Link to={'/restaurantmenu/' + restro.info.id} key={restro.info.id}>
              
              {/* *****NOTE: USING HIGHER ORDER COMPONENT WE WILL TRY ENHANCE RESTAURANTCARD BY ADDING 'Promoted' LABEL */}
              {/* "restro.info.promoted"{restro.info.promoted} */}
              {restro.info.promoted? (<PromotedRestroCard resData={restro.info} />): (<RestroCard resData={restro.info} />)}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
