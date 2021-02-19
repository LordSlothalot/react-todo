import React from "react";
import { Checkbox, IconButton, ListItem, Typography, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


const Todo = ({ todo, toggleComplete, removeTodo }) => {
    function handleCheckboxClick() {
      toggleComplete(todo.id);
    }
    function handleRemoveClick() {
      removeTodo(todo.id);
    }
  
    return (
      <ListItem style={{ display: "flex", backgroundColor: todo.completed ? "#77dd77" : "#ffb347"}}>
        <ListItemIcon>
          <Checkbox edge="start" checked={todo.completed} onClick={handleCheckboxClick} color="disabled"/>
        </ListItemIcon>
        <ListItemText>
          <Typography noWrap variant="body1">
            {todo.task}
          </Typography>
        </ListItemText>

        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={handleRemoveClick}>
            <CloseIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

export default Todo;