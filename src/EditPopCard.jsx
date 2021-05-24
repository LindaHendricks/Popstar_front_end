import React, {useState} from "react";

const EditPopCard = ({updateItem, id}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  console.log(id)
  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked")

    fetch(`http://localhost:3000/items/${id}`, {
         method: "PATCH",
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
         .then((updatedItem) => {
        updateItem(updatedItem);
         });



  }
  

  return (
    <div className="edit">
      <form onSubmit={handleSubmit} className="editCard">
        <input
          type="text"
          name="name"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default EditPopCard;
