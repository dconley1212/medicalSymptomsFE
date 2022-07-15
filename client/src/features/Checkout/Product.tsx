import React from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import styled from "styled-components";
import PillsImage from "../../Assets/kateryna-hliznitsova-hEX5R8u7gCI-unsplash.jpg";
import SprayImage from "../../Assets/nati-melnychuk-SGmgCPxv8OI-unsplash.jpg";

const StyledProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProductName = styled.h2`
  font-size: 1.2rem;
`;

const StyledImg = styled.img`
  width: 32%;
`;

const StyledProductInfo = styled.p`
  font-size: 1rem;
  margin: 0.35rem;
`;

interface ProductInfo {
  id: number;
  name: string;
  price: number;
  description: string;
}

const Product = ({ id, name, price, description }: ProductInfo) => {
  return (
    <StyledProductDiv>
      <StyledProductName>{name}</StyledProductName>
      {id === 1 ? (
        <StyledImg src={SprayImage} alt="Medical Product"></StyledImg>
      ) : (
        <StyledImg src={PillsImage} alt="Medical Product"></StyledImg>
      )}
      <StyledProductInfo>{description}</StyledProductInfo>
      <StyledProductInfo>{formatCurrency(price)}</StyledProductInfo>
    </StyledProductDiv>
  );
};
export default Product;
