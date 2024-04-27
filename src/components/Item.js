import React, { useState } from "react";

function Item({ name, category }) {

  const [itemClass, setItemClass] = useState("");
  const [btnClass, setBtnClass] = useState("");

  function handleItemClass () {
    if (itemClass === "") {
      setItemClass("in-cart");
      name = "Remove from Cart"
    } else {
      setItemClass("");
      name = "Add to Cart"
    }
  }

  function handleBtnClass () {
    if (btnClass === "add") {
      setBtnClass("remove");
    } else {
      setBtnClass("add");
    }
  }

  const btnText = btnClass === "add" ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={itemClass} onClick={handleItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleBtnClass}>{btnText}</button>
    </li>
  );
}

export default Item;