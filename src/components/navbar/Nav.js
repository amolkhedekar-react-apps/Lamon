import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../static/images/logo.svg";
import "./Navbar.css";
import { useStateValue } from "../../stateProviders/StateProvider";
import { auth } from "../../services/firebase";

function Nav() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [menuClicked, setMenuClicked] = useState(false);
  const signout = () => {
    if (user) {
      auth.signOut();
    }
  };
  const menuClickHandler = () => {
    setMenuClicked(!menuClicked);
  };
  const authState = !user && "/signin";
  return (
    <div className="header__div">
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src={Logo}
            width="50"
            height="50"
            alt="Logo"
          />
        </Link>
        <div className="header__menuIcon" onClick={menuClickHandler}>
          <i
            className={menuClicked ? "fa fa-times fa-2x" : "fa fa-bars fa-2x"}
          ></i>
        </div>
        <ul className={menuClicked ? "header__menu active" : "header__menu"}>
          <li onClick={signout}>
            <Link className="header__link" to={authState}>
              {user ? "Sign Out" : "Sign in"}
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/cart">
              <i className="fa fa-shopping-cart header__cartIcon"></i>
              <span className="header__cartCount">{basket?.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
