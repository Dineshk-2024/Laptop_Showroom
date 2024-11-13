import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { cartActions } from "../store/cart-clice"; // Import cart actions
import Cart from "./Cart";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  // Logout handler with cart reset
  const logoutHandler = () => {
    dispatch(authActions.logout());      // Log the user out
    dispatch(cartActions.resetCart());   // Reset the cart to 0
  };

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "newroman", fontSize: "30px",  }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={logoutHandler} className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
