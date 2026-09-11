import { useDispatch, useSelector } from "react-redux";
import { Trash2, BrushCleaning, ShoppingCart, ArrowRightCircle } from "lucide-react";
import { clearItems, removeItem } from "../utils/slices/cartSlice";
import { useNavigate } from "react-router";

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

    const navigate = useNavigate();

    // const emptyCartJsxElement = (
    //   <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
    //     <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 text-center max-w-md">

    //       <ShoppingCart className="w-16 h-16 text-white mx-auto mb-4" />

    //       <h2 className="text-2xl font-bold text-white drop-shadow-lg">
    //         Your cart is empty
    //       </h2>
    //       <p className="text-gray-200 mt-2">
    //         Add some tasty items and make it happy!
    //       </p>

    //       <button
    //         onClick={() => navigate('/')}
    //         className="mt-6 flex items-center justify-center gap-2 px-6 py-3 w-8/12 mx-auto bg-linear-to-r from-pink-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition"
    //       >
    //         Browse Restaurant Items <ArrowRightCircle className="w-5 h-5" />
    //       </button>
    //     </div>
    //   </div>
    // );

    const emptyCartJsxElement = (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-blue-400 p-6">
    <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 text-center max-w-md">

      <ShoppingCart className="w-16 h-16 text-white mx-auto mb-4 animate-pulse" />

      <h2 className="text-2xl font-bold text-white drop-shadow-lg">
        Your cart is empty
      </h2>
      <p className="text-gray-200 mt-2">
        Add some tasty items and make it happy!
      </p>

      <button
        onClick={() => navigate('/')}
        className="mt-6 flex items-center justify-center gap-2 px-6 py-3 w-8/12 mx-auto bg-gradient-to-r from-orange-400 to-blue-400 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition"
      >
        Browse Restaurant Items <ArrowRightCircle className="w-8 h-8 animate-bounce" />
      </button>
    </div>
  </div>
);


    return (
        (cartItems.length === 0)? emptyCartJsxElement :
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