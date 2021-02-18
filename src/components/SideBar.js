import React, { useState } from "react";
import TodoList from "./TodoList";
import { Switch, Grid, Divider } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";



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
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <h2>
            Tasks
          </h2>
        </Grid>
        <Grid item>
          <FormControlLabel
            className="toggle"
            onChange={toggleShowCompleted} 
            control={<Switch size="small" checked={showCompleted} name="checkedA" />}
            label="Show Completed"
          />
        </Grid>
      </Grid>
      <Divider />
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
