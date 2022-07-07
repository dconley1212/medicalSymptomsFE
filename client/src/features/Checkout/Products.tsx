import React, { ReactEventHandler, useEffect, useState } from "react";
import products from "../../data/items.json";
import Product from "./Product";
import { addToCart } from "./ProductToCheckoutSlice";
import { ProductsInCheckout } from "./ProductToCheckoutSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Products = () => {
  const cartProducts = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  const handleAdd = (product: ProductsInCheckout) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div>
        <h2>What to know what Products are right for you?</h2>
        <button></button>
      </div>
      {products.map((product) => {
        return (
          <div>
            <Product
              name={product.name}
              price={product.price}
              description={product.description}
              imgurl={product.imgurl}
            />
            <button onClick={() => handleAdd(product)}></button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
