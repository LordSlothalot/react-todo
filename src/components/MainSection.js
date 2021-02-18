import Typography from "@material-ui/core/Typography";
import React from "react";
import TodoForm from "./TodoForm";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const MainSection = ({ 
  todos,
  setTodos
}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const clearAll = () => {
    setTodos([]);
    setOpen(false);
  }

  return (
    <>
      <Typography noWrap style={{ padding: 16 }} variant="h4">
        le todos
      </Typography>
      <TodoForm addTodo={addTodo} />
      <Button onClick={handleClickOpen}>Clear All</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Clear all tasks"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to clear all tasks?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={clearAll} color="primary" autoFocus>
            Clear
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MainSection;
