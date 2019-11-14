import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { changeAppMode } from "../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpellCheck } from "@fortawesome/free-solid-svg-icons";

const Splash = () => {
  const dispatch = useDispatch();
  const wordList = useSelector(state => state.WordList);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    setIsDisabled(wordList.length < 20);
  }, [wordList]);
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    cardContent: {
      height: 120
    },
    cardVocab: {
      backgroundColor: isDisabled
        ? theme.palette.grey[800]
        : theme.palette.primary.dark,
      color: !isDisabled ? theme.palette.grey[100] : theme.palette.grey[500]
    },
    cardIcon: {
      height: 140
    }
  }));
  const classes = useStyles();

  return (
    <Card className={classes.card + " " + classes.cardVocab}>
      <CardActionArea
        disabled={isDisabled}
        onClick={() => dispatch(changeAppMode(2))}
      >
        <Grid
          className={classes.cardIcon}
          alignItems="center"
          container
          justify="center"
        >
          <FontAwesomeIcon size="6x" icon={faSpellCheck} />
        </Grid>

        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Pop Quiz
          </Typography>
          <Typography variant="body2" component="p">
            {!isDisabled
              ? "Test your vocabulary, find out your progress easily."
              : "You don't have enough words to test yourself. Fill the words in vocabulary list and get ready for the challange."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => dispatch(changeAppMode(2))}
          size="small"
          disabled={isDisabled}
          color="inherit"
        >
          Challenge Yourself
        </Button>
      </CardActions>
    </Card>
  );
};

export default Splash;
