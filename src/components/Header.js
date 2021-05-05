import React from "react";
import "../Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { auth } from "../firebase"
import { useSelector } from "react-redux"

function Header() {

  const user = useSelector(state => state.user)
  const basket = useSelector(state => state.basket)

  //this is just a function to check if the user is logged in so we can show on the screen a login or a logout button
  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          className="header__logo" alt="The Amazon banner"
        ></img>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* header options are referring to 'sign in', etc. like an option inside the navbar */}
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello, {user ? user.email : 'Guest'}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

      <Link to="/orders">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
