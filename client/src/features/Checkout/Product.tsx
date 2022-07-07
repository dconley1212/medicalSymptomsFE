import React from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import { addToCart } from "./ProductToCheckoutSlice";
import { ProductsInCheckout } from "./ProductToCheckoutSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface ProductInfo {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    imgurl: string;
  };
}

const Product = (product: ProductInfo) => {
  const cartProducts = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleAdd = (product: ProductInfo) => {
    dispatch(addToCart(product.product));
    console.log(cartProducts);
  };
  return (
    <div>
      <h2>{product.product.name}</h2>
      <img src={product.product.imgurl} alt="Medical Product"></img>
      <p>{product.product.description}</p>
      <p>{formatCurrency(product.product.price)}</p>
      <button onClick={() => handleAdd(product)}></button>
    </div>
  );
};
export default Product;
