import React, { useState } from "react";
import {
  Grow,
  Dialog,
  Grid,
  Box,
  Container,
  Icon,
  Fab
} from "@material-ui/core";
import AddWord from "./addWord";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import CustomAppBar from "../layout/customAppBar";
import WordList from "./wordList";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  paperRoot: {
    backgroundColor: theme.palette.background.default
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(4)
  }
}));

const ManageDialog = () => {
  const appMode = useSelector(state => state.AppMode);
  const classes = useStyles();
  const [addScreenEnabled, setAddScreenEnabled] = useState(false);
  return (
    <Dialog
      PaperProps={{
        className: classes.paperRoot
      }}
      fullScreen
      open={appMode === 1}
      TransitionComponent={Transition}
    >
      <CustomAppBar title="Vocabulary List" color="secondary" />
      <Grid container justify="center">
        <Container maxWidth="md">
          <Box mt={10} mb={10}>
            <WordList />
          </Box>
        </Container>
      </Grid>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={() => setAddScreenEnabled(true)}
        className={classes.fab}
      >
        <Icon>add</Icon>
      </Fab>
      <Dialog open={addScreenEnabled} aria-labelledby="form-dialog-title">
        <AddWord closeAction={() => setAddScreenEnabled(false)} />
      </Dialog>
    </Dialog>
  );
};

export default ManageDialog;
