import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleToggleCart() {
    fetch(`/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((response) => response.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }

  function handleDelete() {
    fetch(`/items/${item.id}`, {
      method: "DELETE",
    })
      .then(() => onDeleteItem(item.id));
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleToggleCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Item;
