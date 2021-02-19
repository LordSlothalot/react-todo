import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import uuid from "uuid";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const CreateTaskButton = ({ addTodo }) => {
    const [todo, setTodo] = useState({
      id: "",
      task: "",
      completed: false
    });
  
    const handleTaskInputChange = (e) => {
      setTodo({ ...todo, task: e.target.value });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (todo.task.trim()) {
        addTodo({ ...todo, id: uuid.v4() });
        setTodo({ ...todo, task: "" });
      }
    }
    
    const classes = useStyles();

    return (
      <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
        <InputBase
          className={classes.input}
          placeholder="Create task"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton className={classes.iconButton} type="submit"><AddIcon /></IconButton>
      </Paper>
    );
  }
  
  export default CreateTaskButton;