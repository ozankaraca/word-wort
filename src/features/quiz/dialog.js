import React from "react";
import { Dialog, Grow, Grid, makeStyles, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import CustomAppBar from "../layout/customAppBar";
import PopQuiz from "./popQuiz";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  paperRoot: {
    backgroundColor: theme.palette.background.default
  }
}));
const ManageDialog = () => {
  const appMode = useSelector(state => state.AppMode);
  const classes = useStyles();
  return (
    <Dialog
      PaperProps={{
        className: classes.paperRoot
      }}
      fullScreen
      open={appMode === 2}
      TransitionComponent={Transition}
    >
      <CustomAppBar title="Quiz" color="primary" />
      <Grid container justify="center">
        <Grid item xs={12}>
          <Box mt={10}>
            <PopQuiz />
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ManageDialog;
