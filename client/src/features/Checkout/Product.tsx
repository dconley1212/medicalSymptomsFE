import React from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import styled from "styled-components";

const StyledProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ProductInfo {
  name: string;
  price: number;
  description: string;
  imgurl: string;
}

const Product = ({ name, price, description, imgurl }: ProductInfo) => {
  return (
    <StyledProductDiv>
      <h2>{name}</h2>
      <img src={imgurl} alt="Medical Product"></img>
      <p>{description}</p>
      <p>{formatCurrency(price)}</p>
    </StyledProductDiv>
  );
};
export default Product;
