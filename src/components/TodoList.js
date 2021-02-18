import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

const tasks = () => {
  
}

function TodoList({ todos, removeTodo, toggleComplete, filterOption }) {
  console.log(todos);
  let filtered;
  if (filterOption) {
    filtered = todos;
  } else if (!filterOption) {
    filtered = todos.filter(todo => todo.completed === false);
  }

  return (
    <List>
      {filtered.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
      ))}
    </List>
  );
}

export default TodoList;