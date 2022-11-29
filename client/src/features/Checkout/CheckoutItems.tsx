import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";

const StyledWrapperDiv = styled.div`
  background-color: #ffffff;
  font-size: 1.1em;
  padding: 1em;
  width: 50%;
  box-sizing: border-box;
  border-radius: 8px;
`;

const CheckoutItems = () => {
  const cartProducts = useAppSelector((state) => state);

  return (
    <StyledWrapperDiv>
      <h3>Order Summary</h3>
      {cartProducts.itemsInCart.cartItems.map((item) => {
        return (
          <div key={Math.random()}>
            {item.id === 1 && cartProducts.itemsInCart.itemOne > 0 ? (
              <div>
                <p data-testid="ItemOne">{item.name}</p>
                <p data-testid="productPriceOne">{item.price}</p>
                <p>{cartProducts.itemsInCart.itemOne}</p>
              </div>
            ) : null}
            {item.id === 2 && cartProducts.itemsInCart.itemTwo > 0 ? (
              <div>
                <p data-testid="ItemTwo">{item.name}</p>
                <p data-testid="productPriceTwo">{item.price}</p>
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
