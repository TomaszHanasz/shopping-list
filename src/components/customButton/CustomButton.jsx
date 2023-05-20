import React from "react";
import "./customButton.style.css";

const CustomButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default CustomButton;
