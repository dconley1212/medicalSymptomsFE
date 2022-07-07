import React from "react";
import { formatCurrency } from "../../utilities/formatCurrency";

// remember to put this in the readme about the challenges with the store state with
// adding a item to the cart with the new redux tool kit and typescript funcitonality
// also left off trying to figure our how to get the button to add the product to the cart
// store without having to click the button twice

// figured out when I was clicking the button and logging the state in the function right
// after I dispatched the action creator that I was seeing two items in the cartProducts
// state due to the asychronous nature of the dispatch function

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
      <p>{formatCurrency(price)}</p>
    </div>
  );
};
export default Product;
