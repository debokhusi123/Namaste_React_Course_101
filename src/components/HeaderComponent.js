
import { useState } from "react";
import { Link } from "react-router-dom";
// import logout from "./Logout";

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

  // if (isLoggedIn) {
  //   return <Logout />;
  // }

  
  return (
    <div className="navbar">
      <LogoComponent />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li><Link to="/about">
           About
          </Link></li>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <Link to="/login"><button>Login</button></Link>
      )}

    </div>
  );
};

export default HeaderComponent;
