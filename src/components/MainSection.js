import Typography from "@material-ui/core/Typography";
import React from "react";
import TodoForm from "./CreateTaskButton";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";

const ClearAllDialogue = ({
  open,
  handleClose,
  clearAll
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>{"Clear all tasks"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
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
  );
}


const MainSection = ({ 
  todos,
  setTodos
}) => {

  const [open, setOpen] = React.useState(false);

  const handleOpenClearAllDialogue = () => {
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
      <Grid item container spacing={1} direction="column" justify="center" alignItems="center" height="100%" width="100%">
        <Grid item  justify="center">
          <Typography noWrap style={{ padding: 16 }} variant="h4">
            le todos
          </Typography>
        </Grid>

        <Grid item>
          <TodoForm addTodo={addTodo} />
        </Grid>
        
        <Grid item container direction="column" justify="flex-end" alignItems="center" height="100%">
          <Grid item>
            <Button variant="outlined" onClick={handleOpenClearAllDialogue}>Clear All</Button>
          </Grid>
        </Grid>
      </Grid>
      <ClearAllDialogue 
        open={open}
        handleClose={handleClose}
        clearAll={clearAll}
      />
    </>
  );
}

export default MainSection;
