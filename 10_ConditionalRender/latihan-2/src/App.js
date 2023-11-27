import "./App.css";
import React, { useState } from "react";

// const Item = ({ id, text, completed, onToggle }) => {
//   return (
//     <li>
//       <span style={{ textDecoration: completed ? "line-through" : "none" }}>
//         {text}
//       </span>
//       <button onClick={() => onToggle(id)}>
//         {completed ? "Reopen" : "Complete"}
//       </button>
//     </li>
//   );
// };
// const App = () => {
//   const [items, setItems] = useState([
//     { id: 1, text: "Task 1", completed: false },
//     { id: 2, text: "Task 2", completed: false },
//     // Add more items as needed
//   ]);
//   const handleToggle = (itemId) => {
//     const updatedItems = items.map((item) =>
//       item.id === itemId ? { ...item, completed: !item.completed } : item
//     );
//     setItems(updatedItems);
//   };
//   const completedCount = items.filter((item) => item.completed).length;
//   const totalCount = items.length;
//   return (
//     <div>
//       <p>Total Items: {totalCount}</p>
//       <p>Completed Items: {completedCount}</p>
//       <ul>
//         {items.map((item) => (
//           <Item
//             key={item.id}
//             id={item.id}
//             text={item.text}
//             completed={item.completed}
//             onToggle={handleToggle}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

const ControlledInput = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };
  return (
    <div>
      <label>
        Controlled Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
};

const ButtonClick = ({ onButtonClick }) => {
  const handleClick = () => {
    onButtonClick();
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleButtonClick = () => {
    setButtonClickCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h2>Combined Exercise</h2>
      <ControlledInput onInputChange={handleInputChange} />
      <ButtonClick onButtonClick={handleButtonClick} />
      <p>Input Value: {inputValue}</p>
      <p>Button Click Count: {buttonClickCount}</p>
    </div>
  );
};

export default App;
