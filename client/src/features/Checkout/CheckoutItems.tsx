import React from "react";
import { useAppSelector } from "../../app/hooks";
import styled from "styled-components";

const StyledWrapperDiv = styled.div`
  background-color: #f5f5f5;
  position: relative;
  left: 5rem;
  padding: 2rem;
  height: 35vh;
  border-radius: 8px;
`;

const CheckoutItems = () => {
  const cartProducts = useAppSelector((state) => state);

  return (
    <StyledWrapperDiv>
      <h3>Order Summary</h3>
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
    </StyledWrapperDiv>
  );
};

export default CheckoutItems;
