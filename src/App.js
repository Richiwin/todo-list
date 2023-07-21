import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [item, ...oldList]);
    setNewItem("");

    console.log(items);
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);

  }

  function deleteItem(id) {
    const newArray= items.filter((item) => item.id !== id);
    setItems(newArray)
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <input 
      type="text"
      placeholder="add an item..."
      value={newItem}
      />
       <ul>
        {items.map((item) => {
          return (
      <li key={item.id}>
        {item.value}{""}
      <button  className="delete-button"
                onClick={() => deleteItem(item.id)}>delete </button>
                </li>
          );
        })};
                </ul>
      <h3>the delete from the second item .value should be able to delete an id from 1st new item</h3>

      <input
        type="text"
        placeholder="add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button
                className="delete-button"
                onClick={() => deleteItem(item.id)}
              >
                del  {item.id}
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
} 

export default App;
