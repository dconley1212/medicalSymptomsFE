import React, { useEffect } from "react";
import products from "../../data/items.json";
import Product from "./Product";
import { addToCart, removeFromCart } from "./ProductToCheckoutSlice";
import { ProductsInCheckout } from "./ProductToCheckoutSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled from "styled-components";

const StyledProductsPage = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`;

const StyledSurveySection = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  background-color: #ffffff;
  border-radius: 10px;
  width: 40%;
  padding: 3rem;
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
        <h2>Want to know what Products are right for you?</h2>
        <button>Find out here</button>
      </StyledSurveySection>
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
    </StyledProductsPage>
  );
};

export default Products;
