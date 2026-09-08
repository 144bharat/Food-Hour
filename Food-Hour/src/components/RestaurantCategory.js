import { ChevronsDown, ChevronsUp } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/slices/cartSlice';

const RestaurantCategory = (props) => {
  //console.log("props: ", props);
  const { categoryData } = props;
  const [currIndex, setCurrIndex] = useState(null);

  const dispatch = useDispatch();
  const handleAddItemToCart = (cartItem) => {
    dispatch(addItem(cartItem));
  }

  return (
    <div>
      {categoryData.map(
        (cat, index) =>
          //THIS CONDITION IS ADDED TO REMOVE ACCORDIAN ITEM WHOSE DO NOT HAVE ANY ITEMCARDS
          cat.card?.card?.itemCards.length && (
            <div className="accordian bg-blue-100 rounded-lg p-2" key={index}>
              <div className="accordian-title bg-white my-2 py-2 rounded-lg cursor-pointer" onClick={()=>{(currIndex == index)?setCurrIndex(null):setCurrIndex(index)}}>
                {cat.card?.card?.title} ({cat.card?.card?.itemCards.length})
                <button className="float-right">
                  {(currIndex == index)?<ChevronsUp className="text-olive-600" />:<ChevronsDown className="text-olive-600" />}
                </button>
              </div>
              {/* {cat.card?.card?.itemCards --> map -> itemcard.card.info.[id, name, category, description, price/100]} */}
              {currIndex == index && (
                <div className="accordian-content bg-white">
                {cat.card?.card?.itemCards.map((itemcard) => (
                  <div
                    key={itemcard.card.info.id}
                    className="w-full flex md:flex-row flex-col bg-rose-50 my-1"
                  >
                    <div className="left-content md:w-[40%] w-full">
                      <p className="font-bold">{itemcard.card.info.name}</p>
                      <p className="text-sm">
                        Category:{' '}
                        <span className="italic font-light">
                          {itemcard.card.info.category}
                        </span>
                      </p>
                    </div>
                    <div className="right-content md:w-[60%] w-full">
                      <p className="text-sm">
                        Price: &#8377;{' '}
                        <span className="italic font-light">
                          {itemcard.card.info.price / 100}
                        </span>
                      </p>
                      <p className="text-sm">
                        Description:{' '}
                        <span className="italic text-olive-800 font-light">
                          {itemcard.card.info.description}
                        </span>
                      </p>

                      <button className="md:float-right md:w-[40%] w-full bg-amber-400 text-white py-2 m-1 cursor-pointer hover:bg-lime-400 rounded-lg"
                      onClick={() => handleAddItemToCart(itemcard)}
                      >
                        Add Cart
                      </button>
                    </div>
                  </div>
                ))}

                {/* cat.card?.card?.itemCards.map(itemcard => itemcard.card.info.name) */}
              </div>
              )} 
            </div>
          )
      )}
    </div>
  );
};
export default RestaurantCategory;
