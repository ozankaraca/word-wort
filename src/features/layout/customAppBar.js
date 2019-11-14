import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Typography
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeAppMode } from "../../actions/index";
import { makeStyles } from "@material-ui/styles";

const VocabAppBar = props => {
  const useStyles = makeStyles(theme => ({
    appBarTitle: {
      color: theme.palette.grey[100],
      fontWeight: 800
    },
    root: {
      backgroundColor:
        props.color === "primary"
          ? theme.palette.primary.dark
          : theme.palette.secondary.dark
    }
  }));
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar>
        <IconButton
          onClick={() => dispatch(changeAppMode(0))}
          className={classes.appBarTitle}
          edge="start"
          aria-label="menu"
        >
          <Icon>arrow_back</Icon>
        </IconButton>
        <Typography className={classes.appBarTitle} variant="h6">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default VocabAppBar;
