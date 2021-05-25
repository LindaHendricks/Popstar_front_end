import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import PopCard from './PopCard';

const Cart = ({price, name, description, image}) => {
  


  
  return (
  
     <PopCard 
      price={price}
      name={name}
      image={image}
      description={description}
      />
  );
};

export default Cart;
