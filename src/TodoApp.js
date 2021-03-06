import React, { useEffect, useState } from "react";
import './TodoApp.css';
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import Divider from "@material-ui/core/Divider";
import { Grid, Container } from "@material-ui/core";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => { window.addEventListener("resize", () => setWidth(window.innerWidth));}, []);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  if (width < breakpoint) {
    return(
      <Container maxWidth={false} disableGutters={true}>
        <MainSection todos={todos} setTodos={setTodos}/>
        <br/>
        <Divider/>
        <SideBar todos={todos} setTodos={setTodos}/>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} disableGutters={true}>
      <Grid container direction="row">
        <Grid item xs={4}>
          <SideBar todos={todos} setTodos={setTodos}/>
        </Grid>
        <Grid item xs={8}>
          <MainSection todos={todos} setTodos={setTodos}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
