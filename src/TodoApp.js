import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './TodoApp.css';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);
  
  const breakpoint = 620;

  React.useEffect(() => { window.addEventListener("resize", () => setWidth(window.innerWidth));}, []);

  // return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

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

  const clearAll = () => {
    if (window.confirm('Are you sure you wish to clear all items?')) {
      setTodos([]);
    }
  }
  
  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  }

  return (
    <div>
      <div class="sidebar">
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
      </div>
      <div class="main">
        <Typography noWrap style={{ padding: 16 }} variant="h4">
          le todos
        </Typography>
        <TodoForm addTodo={addTodo} />
        <Button onClick={clearAll}>Clear All</Button>
      </div>
    </div>
    
  );
}

export default App;
