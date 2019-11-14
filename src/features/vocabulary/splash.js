import React from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardActions
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { changeAppMode } from "../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  cardContent: {
    height: 120
  },
  cardVocab: {
    backgroundColor: theme.palette.secondary.dark
  },
  cardIcon: {
    height: 140
  }
}));

const Splash = () => {
  const classes = useStyles();
  const wordList = useSelector(state => state.WordList);
  const dispatch = useDispatch();
  return (
    <Card className={classes.card + " " + classes.cardVocab}>
      <CardActionArea onClick={() => dispatch(changeAppMode(1))}>
        <Grid
          className={classes.cardIcon}
          alignItems="center"
          container
          justify="center"
        >
          <FontAwesomeIcon size="6x" icon={faBookOpen} />
        </Grid>

        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Vocabulary
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {wordList.length > 0
              ? "You have " +
                wordList.length +
                " words in your vocabulary list. You can add new words that you've learnt or delete the misspelled words."
              : "Your vocabulary list is currently empty. Learn new words and add to your list."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => dispatch(changeAppMode(1))}
          size="small"
          color="inherit"
        >
          Expand Word List
        </Button>
      </CardActions>
    </Card>
  );
};

export default Splash;
