import React, { useEffect } from "react";
import products from "../../data/items.json";
import Product from "./Product";
import { addToCart, removeFromCart } from "./ProductToCheckoutSlice";
import { ProductsInCheckout } from "./ProductToCheckoutSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled from "styled-components";
import Header from "../../Components/Header";

const StyledProductsPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e0ffff;
  height: 100vh;
`;

const StyledSurveySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7rem 4rem;
  border: 2px solid black;
  background-color: #ffffff;
  border-radius: 10px;
  width: 30%;
`;

const StyledSurveyHeading = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
`;

const StyledSurveyButton = styled.button`
  border-radius: 5px;
  margin-top: 2rem;
  padding: 1.5em;
  cursor: pointer;
`;

const StyledSurveyParagraphs = styled.p`
  width: 70%;
  margin: 2rem 0rem;
`;

const StyledProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem 0rem 6rem;
`;

const StyledProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #ffffff;
`;

const ProductButton = styled.button`
  width: 20%;
  padding: 0.5rem;
  border-radius: 50%;
`;

const Products = () => {
  const cartProducts = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  const handleAdd = (product: ProductsInCheckout) => {
    dispatch(addToCart(product));
  };
  const handleDelete = (product: ProductsInCheckout) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <Header />
      <StyledProductsPage>
        <StyledSurveySection>
          <StyledSurveyHeading>
            What Products make sense for you?
          </StyledSurveyHeading>
          <StyledSurveyButton>Find out here</StyledSurveyButton>
          <StyledSurveyParagraphs>
            "There is nothing worse than purchasing the wrong product because
            you don't completely understand the nuances of your symptoms!
            Following their questionaire helped me feel comfortable that I was
            making the right choice."
          </StyledSurveyParagraphs>
          <p> -Karen Conley</p>
        </StyledSurveySection>
        <StyledProductsSection>
          {products.map((product) => {
            return (
              <StyledProductDiv>
                <Product
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  imgurl={product.imgurl}
                />
                <ProductButton onClick={() => handleAdd(product)}>
                  Add
                </ProductButton>
                {product.id === 1 ? (
                  <p>{cartProducts.itemsInCart.itemOne}</p>
                ) : (
                  <p>{cartProducts.itemsInCart.itemTwo}</p>
                )}
                <ProductButton onClick={() => handleDelete(product)}>
                  Delete
                </ProductButton>
              </StyledProductDiv>
            );
          })}
        </StyledProductsSection>
      </StyledProductsPage>
    </div>
  );
};

export default Products;
