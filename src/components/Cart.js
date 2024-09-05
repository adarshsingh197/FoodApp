import React from "react";
import { clearItem  } from "../utils/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    console.log("2222222222222222");
    dispatch(clearItem());
  };

  return (
    <div className="flex flex-col items-center m-4 p-4 w-6/12 m-auto">
      <h1 className="text-center font-bold text-2xl">Cart</h1>
      <button onClick={handleClearCart} className="m-2 p-2 bg-black text-white rounded-lg">Clear Cart</button>

      {/* Correcting the condition here */}
      {cartItems.length === 0 && <h1>Cart is Empty, Please add Food Items</h1>}

      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
