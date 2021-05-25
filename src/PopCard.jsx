import { useState } from "react";
import React from "react";
import "./PopCard.scss";
import PopCardDetails from "./PopCardDetails";
import CancelIcon from "@material-ui/icons/Cancel";
import EditPopCard from "./EditPopCard";
import styled from "styled-components";

function PopCard({
  cart,
  addToCart,
  id,
  name,
  description,
  price,
  image,
  deleteItem,
  updateItem,
  currentUser,
}) {
  //const { id } = useParams();

  function handleAddCart() {
    fetch(`http://localhost:3000/purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        item_id: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        addToCart(response.item);
        //    console.log(response)
        //    const id = response.item.id
        //    const name = response.item.name
        //    const price = response.item.price
        //    const image = response.item.image
        //    const description = response.item.description
        // response.item
      });
  }

  const CartButton = () => {
    return <button className="add_to_card" onClick={handleAddCart}>Add to Cart</button>;
  };

  const [item, setItem] = useState({});
  const [updatedItem, setUpdatedItem] = useState(false);

  const handleDeleteClick = () => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE",
    });
    deleteItem(id);
  };
  const handleClick = () => {
    console.log("clicked");
    setUpdatedItem(!updatedItem);
  };
  return (
    
    <li className="card">
     
      <img className="card__image" src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="price">$ {price}</p>
      {currentUser ? (
        <span>
          <button className="cart_update_button" onClick={handleClick}>
            {" "}
            Update{" "}
          </button>
          <button className="delete__button" onClick={handleDeleteClick}>
            Remove
          </button>
        </span>
      ) : (
        <CartButton />
      )}
      
      {/* <span><CancelIcon className="delete__button"/></span> */}
      {updatedItem ? <EditPopCard updateItem={updateItem} id={id} /> : null}
    </li>
  );
}

export default PopCard;
