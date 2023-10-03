import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemForSubmit }) {
  const [itemName, setItemName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Produce");

  function handleItemName(event) {
    setItemName(event.target.value);
  }

  function handleCategory(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSubmit(event) {
    const newItem = {
      id: uuid(),
      name: itemName,
      category: selectedCategory,
    };
    onItemForSubmit(newItem);
    event.preventDefault();
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
