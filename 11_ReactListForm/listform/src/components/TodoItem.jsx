import { useState } from "react";
const TodoItem = ({ todo, onRemove, onToggle }) => {
    const [toogleText, setToggleText] = useState('Complete');
    const handleToggle = () => {
      onToggle(todo.id);
      setToggleText(todo.completed ? 'Complete' : 'Undo');
    };
  
    const handleDelete = () => {
      onRemove(todo.id);
    };
  
    return (
      <li key={todo.id}>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <button onClick={handleToggle} style={{ margin: '0px 12px' }}>
          {toogleText}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </li>
    );
  };
  
  export default TodoItem;