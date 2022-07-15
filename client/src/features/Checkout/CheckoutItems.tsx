import React from "react";
import { useAppSelector } from "../../app/hooks";

const CheckoutItems = () => {
  const cartProducts = useAppSelector((state) => state);
  return (
    <div>
      <h3>Cart</h3>
      {cartProducts.itemsInCart.cartItems.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            {item.id === 1 ? (
              <p>{cartProducts.itemsInCart.itemOne}</p>
            ) : (
              <p>{cartProducts.itemsInCart.itemTwo}</p>
            )}
          </div>
        );
      })}
      <p>Total Quantity: {cartProducts.itemsInCart.totalQuantity}</p>
      <p>Total Price: {cartProducts.itemsInCart.totalPrice}</p>
    </div>
  );
};

export default CheckoutItems;
