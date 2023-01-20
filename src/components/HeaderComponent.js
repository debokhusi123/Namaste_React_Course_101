
import { useState } from "react";

function LogoComponent() {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  );
}

const HeaderComponent = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="navbar">
      <LogoComponent />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className='logout' onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className='login' onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
