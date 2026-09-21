import { ShoppingCart } from 'lucide-react';
// import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useContext, useState } from 'react';

import { useSelector } from 'react-redux';

import Food_Logo from "../images/Food_Logo.png"; 

const Header = () => {

  const [logInBtnLabel, setLogInBtnLabel] = useState("log-in");

  const onlineStatus = useOnlineStatus();

  const {loggedInUserName} = useContext(UserContext);
  
  //WITH THE HELP OF useSelector WE SUBSCRIBED TO THE REDUX STORE.
  const cartItems = useSelector((appStore) => appStore.cart.items);

  return (
    <div className="header not-dark:bg-orange-200 bg-olive-950 flex justify-between items-center px-5 shadow-lg not-dark:text-olive-950 text-white font-semibold">
      <div className="logoContainer">
        <img className="logo w-20 rounded-full" src={Food_Logo} />
      </div>
      <ul className="navItems flex">
        <li className="px-5 hover:not-dark:text-white hover:underline decoration-dashed">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5 hover:not-dark:text-white hover:underline decoration-dashed">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-5 hover:not-dark:text-white hover:underline decoration-dashed">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-5 hover:not-dark:text-white hover:underline decoration-dashed">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-5">
          <Link to="/cart" className='hover:not-dark:text-white flex gap-1'><ShoppingCart /> ( {cartItems.length} )</Link>
        </li>
      </ul>
      <div className="userProfile flex gap-1 items-center">
        {/* will use this if user logged in: <UserRoundPen/> */}
        <button className={`text-white rounded-lg p-2 cursor-pointer ${logInBtnLabel === "log-in"?"bg-red-500":"bg-green-500"}`} onClick={()=>{setLogInBtnLabel(logInBtnLabel === "log-in"?"log-out":"log-in")}}>
            {logInBtnLabel}
        </button>
        <p>{loggedInUserName}</p>
        {onlineStatus ? `🟢` : `🔴`}
      </div>
    </div>
  );
};

export default Header;
