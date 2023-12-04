import React, {useState} from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState("");

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = () => {
    if (newTodoText !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    }
  };

  return (
    <div>
        <h2>Todo List</h2>
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onRemove={handleDelete}
                    onToggle={handleToggle}
                />
            ))}
        </ul>

        <h3 style={{ margin: 0 }}>Add New Todo</h3>
        <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            required
        />
        <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;