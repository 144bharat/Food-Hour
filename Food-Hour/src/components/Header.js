import { ShoppingCart } from 'lucide-react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

import { useSelector } from 'react-redux';

const Header = () => {

  const onlineStatus = useOnlineStatus();

  const {loggedInUserName} = useContext(UserContext);
  
  //WITH THE HELP OF useSelector WE SUBSCRIBED TO THE REDUX STORE.
  const cartItems = useSelector((appStore) => appStore.cart.items);

  return (
    <div className="header not-dark:bg-orange-200 bg-olive-950 flex justify-between items-center px-5 shadow-lg not-dark:text-olive-950 text-white font-semibold">
      <div className="logoContainer">
        <img className="logo w-20 rounded-full" src={LOGO_URL} />
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
      <div className="userProfile">
        {/* will use this if user logged in: <UserRoundPen/> */}
        {(loggedInUserName)? loggedInUserName: "Sign-up / log-in"}
        {onlineStatus ? `🟢` : `🔴`}
      </div>
    </div>
  );
};

export default Header;
