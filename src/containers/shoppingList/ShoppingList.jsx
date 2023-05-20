import CustomButton from "../../components/customButton/CustomButton";
import CustomInput from "../../components/customInput/CustomInput";
import ListItem from "../../components/listItem/ListItem";
import React, { useState } from "react";
import "./shoppingList.style.css";

const defaultShoppingList = [];

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState(defaultShoppingList);

  const addItemHandler = (item) => {
    if (item.length > 0) {
      setShoppingList([...shoppingList, item]);
    }
  };

  const removeItemHandler = (index) => {
    const updatedList = [...shoppingList];
    updatedList.splice(index, 1);
    setShoppingList(updatedList);
  };

  return (
    <div className="list-container">
      <div className="list-box">
        <CustomInput addNewItem={addItemHandler} />
        <div className="shopping-list">
          <h1>Shopping List:</h1>
          {shoppingList.map((el, index) => {
            return (
              <ListItem
                itemName={el}
                key={index}
                onRemove={() => removeItemHandler(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
