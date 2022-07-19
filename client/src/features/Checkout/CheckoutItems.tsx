import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

const CheckoutItems = () => {
  const cartProducts = useAppSelector((state) => state);

  //   useEffect(() => {
  //     for (let i = 0; i < cartProducts.itemsInCart.cartItems.length; i++) {
  //       if (cartProducts.itemsInCart.checkoutItems.length === 0) {
  //         dispatch(itemsInCheckout(cartProducts.itemsInCart.cartItems[i]));
  //       }
  //       if (
  //         cartProducts.itemsInCart.checkoutItems.length === 1 &&
  //         cartProducts.itemsInCart.checkoutItems[0].id !==
  //           cartProducts.itemsInCart.cartItems[i].id
  //       ) {
  //         dispatch(itemsInCheckout(cartProducts.itemsInCart.cartItems[i]));
  //       }
  //     }
  //   }, [
  //     cartProducts.itemsInCart.checkoutItems,
  //     cartProducts.itemsInCart.cartItems,
  //     dispatch,
  //   ]);

  return (
    <div>
      <h3>Cart</h3>
      {cartProducts.itemsInCart.cartItems.map((item) => {
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
      <p>Total Quantity: {cartProducts.itemsInCart.totalQuantity}</p>
      <p>Total Price: {cartProducts.itemsInCart.totalPrice}</p>
    </div>
  );
};

export default CheckoutItems;
