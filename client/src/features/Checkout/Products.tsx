import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import products from "../../data/items.json";
import Product from "./Product";

const Products = () => {
  const cartProducts = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleAdd = () => {};
  return (
    <div>
      <div>
        <h2>What to know what Products are right for you?</h2>
        <button></button>
      </div>
      <div>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              imgurl={product.imgurl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
