import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import styled from "styled-components";



const Span = styled.span`
color: red;
text-align: center;
margin-left: 300px
`

const Header = ({items,cart}) => {
  
  
  
  return (
    <div className="header">
        
      <Link to="/">
        <img
          className="header__logo"
          src="https://i.pinimg.com/564x/38/4f/86/384f864188073e74b9bbff67c7788b23.jpg"
          // src="https://www.kindpng.com/picc/m/238-2380777_michael-jackson-billie-jean-silhouette-michael-jackson-logo.png"
          alt="popstar"
        />
      </Link>
    
      <div className="header__search">
   
        <input type="text" className="header__searchInput" placeholder="Search..."/>
        
      </div>
      <div className="header__nav"></div>
      <Link to="/login">
      <div className="header__option">
        <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        </Link>
      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
      </div>
      <div className="cart">
      <Link to="/checkout">
        <div className="cart__optionBasket">
          <ShoppingBasketIcon />
          <span
            className="cart__optionLineTwo 
        header__basketCount"
          >
            {cart.length}
          </span>
          
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Header;
