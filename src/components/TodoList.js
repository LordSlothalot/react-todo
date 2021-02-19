import { List } from "@material-ui/core";
import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, removeTodo, toggleComplete, showCompleted }) {
  const filteredTodos = showCompleted
    ? todos
    : todos.filter(todo => todo.completed === false);

  return (
    <List>
      {filteredTodos.map(todo => (
          <TodoItem
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