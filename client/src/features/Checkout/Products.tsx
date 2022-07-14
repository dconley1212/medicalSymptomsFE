import React, { useEffect } from "react";
import products from "../../data/items.json";
import Product from "./Product";
import { addToCart, removeFromCart } from "./ProductToCheckoutSlice";
import { ProductsInCheckout } from "./ProductToCheckoutSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled from "styled-components";

const StyledProductsPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5;
  height: 100vh;
`;

const StyledSurveySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem 4rem;
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
`;

const StyledSurveyParagraphs = styled.p`
  width: 70%;
`;

const StyledProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 0.5rem 0rem 6rem;
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
    <StyledProductsPage>
      <StyledSurveySection>
        <StyledSurveyHeading>
          What Products make sense for you?
        </StyledSurveyHeading>
        <StyledSurveyButton>Find out here</StyledSurveyButton>
        <StyledSurveyParagraphs>
          "There is nothing worse than purchasing the wrong product because you
          don't completely understand the nuances of your symptoms. Following
          their questionaire helped me feel comfortable that I was making the
          right choice!"
        </StyledSurveyParagraphs>
        <p> -Karen Conley</p>
      </StyledSurveySection>
      <StyledProductsSection>
        {products.map((product) => {
          return (
            <div>
              <Product
                name={product.name}
                price={product.price}
                description={product.description}
                imgurl={product.imgurl}
              />
              <button onClick={() => handleAdd(product)}>Add</button>
              {product.id === 1 ? (
                <p>{cartProducts.itemsInCart.itemOne}</p>
              ) : (
                <p>{cartProducts.itemsInCart.itemTwo}</p>
              )}
              <button onClick={() => handleDelete(product)}>Delete</button>
            </div>
          );
        })}
      </StyledProductsSection>
    </StyledProductsPage>
  );
};

export default Products;
