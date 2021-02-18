import React, { useState } from "react";
import TodoList from "./TodoList";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const SideBar = ({ 
  todos,
  setTodos
}) => {
  const [showCompleted, setShowCompleted] = useState(true);
  
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  }

  return (
    <>
      <h3>
        Tasks
      </h3>
      <FormControlLabel
        className="toggle"
        onChange={toggleShowCompleted} 
        control={<Switch name="checkedA" />}
        label="Show Completed"
      />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        filterOption={showCompleted}
      />
    </>
  );
}

export default SideBar;
