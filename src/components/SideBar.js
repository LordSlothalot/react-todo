import React, { useState } from "react";
import TodoList from "./TodoList";
import { Switch, Grid } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    margin: '2px 4px',
  },
}));

const SideBar = ({ 
  todos,
  setTodos
}) => {
  const classes = useStyles();
  
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
      <Grid container alignItems="center" justify="space-between"  className={classes.root} >
        <Grid item>
          <h2>
            Tasks
          </h2>
        </Grid>
        <Grid item >
          <FormControlLabel
            className="toggle"
            onChange={toggleShowCompleted} 
            control={<Switch size="small" checked={showCompleted} color="primary"/>}
            label="Show Completed"
          />
        </Grid>
      </Grid>
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        showCompleted={showCompleted}
      />
    </>
  );
}

export default SideBar;
