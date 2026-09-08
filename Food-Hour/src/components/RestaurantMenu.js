import { useState, useEffect } from 'react';
import ShimmerCards from './ShimmerCards';
import { useParams } from 'react-router';
//import {RESMENU_URL} from "../utils/constants"
import useRestaurantMenu from '../utils/useRestaurantMenu';

import { Star } from 'lucide-react';
import { RestroCardLogo } from '../utils/constants';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { id } = useParams();

  let restaurantInfo = useRestaurantMenu(id);
  /* **** NOTE: NOW ALL THIS COMPLETE RESPONSIBILITY IS HANDLED BY useRestaurantMenu(id) CUSTOM HOOK.
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    //console.log("useState: ", useState());

//console.log("id: " + id);
    useEffect(()=>{
        fetchRestaurantMenu();
    },[]);

    

    const fetchRestaurantMenu = async () =>{
        const data = await fetch(RESMENU_URL+id);
        const restroInfo = await data.json();
        setRestaurantInfo(restroInfo);
        //console.log("restaurantInfo: ",restaurantInfo);//.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    }
*/
  if (restaurantInfo === null) {
    return <ShimmerCards />;
  }
  //console.log("[INSIDE]: "+JSON.stringify(restaurantInfo));
  const {
    name,
    totalRatingsString,
    avgRatingString,
    costForTwo,
    cuisines,
    sla,
  } = restaurantInfo.data.cards[2].card.card.info;
  //const cards = restaurantInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const itemCards =
    restaurantInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
      .card.itemCards;

  const cards =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log('CARDS: ' + JSON.stringify(cards));
  return (
    <div className="menu p-5 w-[60%] mx-auto">
      <div className="card flex md:flex-row flex-col-reverse gap-5 border shadow-lg rounded-2xl p-2">
        <div className="left-side md:w-[60%] bg-amber-100 rounded-2xl">
          <h1 className="font-extrabold text-2xl">{name}</h1>
          <div className="flex gap-1">
            <Star className=" bg-lime-500 rounded-full p-px text-white fill-current size-5" />
            {avgRatingString} ( {totalRatingsString} ) - {costForTwo}
          </div>
          <p>
            <span className="italic text-olive-500">{cuisines.join(', ')}</span>
          </p>
          <p>
            {sla.lastMileTravelString} away - Est. time{' '}
            <span className="text-lime-500">{sla.slaString}</span>
          </p>
        </div>
        <div className="right-side md:w-[40%] bg-blue-200">
          <img src={RestroCardLogo} alt="Restro Image" className=" w-full" />
        </div>
      </div>
      <hr className="text-olive-200 my-5" />
      <RestaurantCategory categoryData={cards} />
    </div>
  );
};

export default RestaurantMenu;
