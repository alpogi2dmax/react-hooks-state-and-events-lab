import React, { useState } from "react";

function Item({ name, category }) {

  const [isAdd, setIsAdd] = useState(false)

  function handleAddClick() {
    setIsAdd((isAdd) => !isAdd)
  }

  const cart = isAdd ? "in-cart" : ""

  const color = isAdd ? "purple" : "yellow"

  return (
    <li className={cart} onClick={handleAddClick}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{background: color}} className="add">{isAdd ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
