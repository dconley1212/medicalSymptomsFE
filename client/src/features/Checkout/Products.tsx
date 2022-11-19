import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import products from "../../data/items.json";
import Product from "./Product";
import { addToCart, removeFromCart } from "./ProductToCheckoutSlice";
import { ProductsInCheckout } from "./ProductToCheckoutSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled from "styled-components";
import CheckoutItems from "./CheckoutItems";

const StyledProductsPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

const StyledSurveySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 9rem 6rem 12rem 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  width: 40%;
  font-size: 1.7em;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 3px #000000;
  @media screen and (max-width: 460px) {
    width: 70vw;
    height: 23vh;
    margin-top: 0rem;
    margin-bottom: 0.5rem;
    position: relative;
    bottom: 6.5rem;
  }
`;

const StyledSurveyHeading = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 65%;
  @media screen and (max-width: 460px) {
    width: 75%;
    font-size: 1.3rem;
    margin-top: 0.2rem;
    margin-bottom: 0rem;
  }
`;

const StyledSurveyButton = styled.button`
  border-radius: 10px;
  padding: 1em;
  cursor: pointer;
  background-color: #cb4a6f;
  font-size: 1rem;
  @media screen and (max-width: 460px) {
    padding: 0.5rem;
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`;

const StyledSurveyParagraphs = styled.p`
  width: 70%;
  margin: 2rem 0rem;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 460px) {
    margin: 0.5rem 0rem;
    font-size: 0.8rem;
  }
`;

const StyledProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 4rem 0.3rem 4rem;
  font-size: 1.2em;
  width: 20%;
  box-sizing: border-box;
  @media screen and (max-width: 460px) {
    width: 70vw;
    margin: 0.5rem 3rem 0.5rem 3rem;
    position: relative;
    bottom: 7.5rem;
  }
`;

const StyledProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 0.5rem;
  width: 100%;
  margin: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 3px 3px #4682b4;
  @media screen and (max-width: 460px) {
    width: 70vw;
    height: 21vh;
    margin-bottom: 0rem;
  }
`;
const ProductButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProductButtonAdd = styled.button`
  background-color: white;
  padding: 0.5rem;
  text-align: center;
  text-decoration: bold;
  display: inline-block;
  font-size: 1rem;
  margin: 0.2rem 0.4rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #4682b4;
  &:hover {
    transition: ease-in-out;
    background-color: #ffffff;
  }
  @media screen and (max-width: 460px) {
    font-size: 0.8rem;
    padding: 0.4rem;
    border-radius: 50%;
  }
`;

const ProductButtonDelete = styled.button`
  background-color: white;
  padding: 0.5rem;
  text-align: center;
  text-decoration: bold;
  display: inline-block;
  font-size: 1rem;
  margin: 0.2rem 0.4rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #4682b4;
  &:hover {
    transition: ease-in-out;
    background-color: #ffffff;
  }
  @media screen and (max-width: 460px) {
    font-size: 0.8rem;
    padding: 0.4rem;
    border-radius: 50%;
  }
`;

const StyledCheckoutComponent = styled.div`
  height: 35vh;
`;

const Products = () => {
  const cartProducts = useAppSelector((state) => state);
  const [isActive, setIsActive] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (cartProducts.itemsInCart.totalQuantity > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [cartProducts.itemsInCart.totalQuantity]);

  const handleButtonSurvey = () => {
    navigate("/survey");
  };

  const handleAdd = (product: ProductsInCheckout) => {
    dispatch(addToCart(product));
  };
  const handleDelete = (product: ProductsInCheckout) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <StyledProductsPage>
        <StyledSurveySection>
          <StyledSurveyHeading title="Products Title">
            What Products make sense for you?
          </StyledSurveyHeading>
          <StyledSurveyButton onClick={handleButtonSurvey}>
            Find out here
          </StyledSurveyButton>
          <StyledSurveyParagraphs title="review">
            "There is nothing worse than purchasing the wrong product because
            you don't completely understand the nuances of your symptoms!
            Following their questionaire helped me feel comfortable I was making
            the right choice." -Karen Conley
          </StyledSurveyParagraphs>
        </StyledSurveySection>
        <StyledProductsSection>
          {products.map((product) => {
            return (
              <StyledProductDiv data-testid={product.id} key={product.id}>
                <Product
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  id={product.id}
                />
                <ProductButtonDiv>
                  <ProductButtonAdd
                    title="add"
                    onClick={() => handleAdd(product)}
                  >
                    +
                  </ProductButtonAdd>
                  {product.id === 1 ? (
                    <p data-testid="itemOneQuantity">
                      {cartProducts.itemsInCart.itemOne}
                    </p>
                  ) : (
                    <p data-testid="itemTwoQuantity">
                      {cartProducts.itemsInCart.itemTwo}
                    </p>
                  )}
                  <ProductButtonDelete onClick={() => handleDelete(product)}>
                    -
                  </ProductButtonDelete>
                </ProductButtonDiv>
              </StyledProductDiv>
            );
          })}
        </StyledProductsSection>
        {isActive === true ? (
          <StyledCheckoutComponent
            data-testid="checkoutComponent"
            title="Checkout dropdown"
          >
            <CheckoutItems />
          </StyledCheckoutComponent>
        ) : null}
      </StyledProductsPage>
    </div>
  );
};

export default Products;
