import React, { useState } from "react";
import CustomButton from "../customButton/CustomButton";
import "./customInput.style.css";
import ShoppingList from "../../containers/shoppingList/ShoppingList";

const CustomInput = (props) => {
  const [newItem, setNewItem] = useState("");

  const onChangeHandler = (e) => {
    setNewItem(e.target.value);
  };

  const onClickHandler = () => {
    props.addNewItem(newItem);
    setNewItem("");
  };

  return (
    <div className="list-input">
      <input type="text" onChange={onChangeHandler} value={newItem} />
      <CustomButton text="Add" onClick={onClickHandler} />
    </div>
  );
};

export default CustomInput;
