import React, { useState } from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import OrderDelivered from "./OrderDelivered"; // Import the popup component
import "./Layout.css";
import { useSelector } from "react-redux";

const Layout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false); // Track order placement
  const itemsList = useSelector((state) => state.cart.itemsList || []);
  
  let total = 0;
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  const showCart = useSelector((state) => state.cart.showCart);

  const placeOrderHandler = () => {
    setOrderPlaced(true); // Show the popup
  };

  const closePopupHandler = () => {
    setOrderPlaced(false); // Hide the popup on close
  };

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ₹ {total}</h3>
          <button className="orderBtn" onClick={placeOrderHandler}>
            Place Order
          </button>
          {orderPlaced && <OrderDelivered onClose={closePopupHandler} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
