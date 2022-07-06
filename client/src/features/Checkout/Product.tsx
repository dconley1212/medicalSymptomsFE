import React from "react";

interface ProductInfo {
  name: string;
  price: number;
  description: string;
  imgurl: string;
}

const Product = ({ name, price, description, imgurl }: ProductInfo) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgurl} alt="Medical Product"></img>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};
export default Product;
