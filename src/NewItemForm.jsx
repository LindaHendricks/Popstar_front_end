import React, { useState } from "react";
import styled from "styled-components";

const H2 = styled.h2`
text-align: center;
margin-top: 30px;
margin-bottom: 2px;


`

const Form1 = styled.form`
text-align: center;
margin-top: 0;
margin-bottom: 2px;
margin-left: 300px;
margin-right: 300px;
background-color: black;
border-radius: 15px
`
const Input = styled.input`
font-size: 12px;
text-align: center;
font-style: italic;
border-radius: 5px;
border: none
`

function NewItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
        description: description,
        user_id: 1
      }),
    })
      .then((r) => r.json())
      .then((newItem) => addItem(newItem));
  }

  return (
    <div className="new-Item-form">
      <H2>Add a new item</H2>
      <Form1 onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          name="image"
          placeholder="Pic link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
         <Input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </Form1>
    </div>
  );
}

export default NewItemForm;