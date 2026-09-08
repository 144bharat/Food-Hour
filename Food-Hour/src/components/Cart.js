import { useDispatch, useSelector } from "react-redux";
import { Trash2, BrushCleaning } from "lucide-react";
import { clearItems, removeItem } from "../utils/slices/cartSlice";

const Cart = () => {
    const cartItems = useSelector((appStore) => appStore.cart.items);

    const dispatch = useDispatch();

    const handleRemoveItemFromCart = (id) => {
        dispatch(removeItem({id: id}));
    }

    const handleClearItemsFromCart = () => {
        console.log("INSIDE CLEAR")
        dispatch(clearItems());
    }

    return (
        (cartItems.length === 0)?<h1 className="my-5 p-1 text-gray-700 rounded-md w-4/12 mx-auto">YOUR CART IS EMPTY PLEASE ADD ITEMS.....</h1>:
        <>
            {/* cart-title */}
            <div className="my-5 bg-white flex flex-col justify-center items-center p-1 text-gray-700 rounded-md w-8/12 mx-auto">
                <p className="font-bold">CART Items - ( <span> {cartItems.length} </span>)</p>
            <button className="bg-gray-100 rounded-md p-2 flex flex-nowrap cursor-pointer group" onClick={() => handleClearItemsFromCart()}>CLEAR CART <BrushCleaning className="text-red-500 group-hover:animate-pulse" /></button>
            </div>
            {
                <div className="w-[80%] mx-auto bg-white py-1 text-black">
                    {
                        cartItems.map((cartItem) => {return (
                            <div className="mb-2 border-b-2 border-gray-100 text-md flex justify-between px-2 w-6/12 mx-auto" key={cartItem?.card?.info?.id}>
                                <div>
                                    <p className="text-gray-600">{cartItem?.card?.info?.name} <span>( {cartItem?.card?.info?.category} )</span> - <span>Rs. {cartItem?.card?.info?.price/100}</span></p>
                                    <p className="text-gray-400 italic text-sm">{cartItem?.card?.info?.description}</p>
                                </div>
                                <div>
                                    <button className="bg-black text-white p-1 rounded-md cursor-pointer"
                                     onClick={() => handleRemoveItemFromCart(cartItem?.card?.info?.id)}
                                     >
                                        <Trash2/>
                                     </button>
                                </div>
                            </div>
                        )})
                    }
                </div>
            }
            
        </>
    )
}

export default Cart;