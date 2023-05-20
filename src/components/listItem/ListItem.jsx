import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./listItem.style.css";

const ListItem = (props) => {
  return (
    <div className="single-list-item">
      <p>{props.itemName}</p>
      <CustomButton text="Delete" onClick={props.onRemove} />
    </div>
  );
};

export default ListItem;
