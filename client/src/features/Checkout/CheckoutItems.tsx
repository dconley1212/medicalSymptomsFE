import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

const CheckoutItems = () => {
  const cartProducts = useAppSelector((state) => state);
  const [sprayItem, setSprayItem] = useState<boolean>(false);
  const [pillsItem, setPillsItem] = useState<boolean>(false);

  useEffect(() => {
    for (let i = 0; i < cartProducts.itemsInCart.cartItems.length; i++) {
      if (cartProducts.itemsInCart.cartItems[i].id === 1) {
        setSprayItem(true);
      }
      if (cartProducts.itemsInCart.cartItems[i].id === 2) {
        setPillsItem(true);
      }
    }
  }, [cartProducts.itemsInCart.cartItems]);

  return (
    <div>
      <h3>Cart</h3>
      {/* {cartProducts.itemsInCart.cartItems.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            {item.id === 1 ? (
              <p>{cartProducts.itemsInCart.itemOne}</p>
            ) : (
              <p>{cartProducts.itemsInCart.itemTwo}</p>
            )} */}
      {/* </div>
        );
      })} */}
      <p>Total Quantity: {cartProducts.itemsInCart.totalQuantity}</p>
      <p>Total Price: {cartProducts.itemsInCart.totalPrice}</p>
    </div>
  );
};

export default CheckoutItems;
