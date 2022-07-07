import React, { ReactEventHandler, useState } from "react";
import products from "../../data/items.json";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      <div>
        <h2>What to know what Products are right for you?</h2>
        <button></button>
      </div>
      {products.map((product) => {
        return (
          <div>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
