import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { ProductsInCheckout } from "./ProductToCheckoutSlice";

const CheckoutItems = () => {
  const cartProducts = useAppSelector((state) => state);
  const [dropdownCart, setDropdownCart] = useState<ProductsInCheckout[]>([]);

  useEffect(() => {
    for (let i = 0; i < cartProducts.itemsInCart.cartItems.length; i++) {
      if (dropdownCart.length === 0) {
        setDropdownCart([
          ...dropdownCart,
          cartProducts.itemsInCart.cartItems[i],
        ]);
      }
      if (
        dropdownCart.length === 1 &&
        dropdownCart[0].id !== cartProducts.itemsInCart.cartItems[i].id
      ) {
        setDropdownCart([
          ...dropdownCart,
          cartProducts.itemsInCart.cartItems[i],
        ]);
      }
    }
  }, [dropdownCart, cartProducts.itemsInCart.cartItems]);

  return (
    <div>
      <h3>Cart</h3>
      {dropdownCart.map((item) => {
        return (
          <div>
            {item.id === 1 && cartProducts.itemsInCart.itemOne > 0 ? (
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartProducts.itemsInCart.itemOne}</p>
              </div>
            ) : null}
            {item.id === 2 && cartProducts.itemsInCart.itemTwo > 0 ? (
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartProducts.itemsInCart.itemTwo}</p>
              </div>
            ) : null}
          </div>
        );
      })}
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
