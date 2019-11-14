import React, { useState, useEffect } from "react";
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
import { faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { addWord } from "../../actions/index";

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

  const fillWithMockData = () => {
    let tmpData = [
      { englishWord: "Hello", germanWord: "Hallo" },
      { englishWord: "Love", germanWord: "Liebe" },
      { englishWord: "Hate", germanWord: "Hass" },
      { englishWord: "Success", germanWord: "Erfolg" },
      { englishWord: "Brother", germanWord: "Bruder" },
      { englishWord: "Victory", germanWord: "Sieg" },
      { englishWord: "Laugh", germanWord: "Lachen" },
      { englishWord: "Income", germanWord: "Einkommen" },
      { englishWord: "Truth", germanWord: "Wahrheit" },
      { englishWord: "act", germanWord: "Akt" },
      { englishWord: "why", germanWord: "warum" },
      { englishWord: "ask", germanWord: "fragen" },
      { englishWord: "men", germanWord: "Männer" },
      { englishWord: "change", germanWord: "Veränderung" },
      { englishWord: "went", germanWord: "ging" },
      { englishWord: "light", germanWord: "Licht" },
      { englishWord: "kind", germanWord: "Art" },
      { englishWord: "off", germanWord: "aus" },
      { englishWord: "need", germanWord: "müssen" },
      { englishWord: "house", germanWord: "Haus" },
      { englishWord: "picture", germanWord: "Bild" },
      { englishWord: "try", germanWord: "versuchen" },
      { englishWord: "us", germanWord: "uns" },
      { englishWord: "again", germanWord: "wieder" },
      { englishWord: "animal", germanWord: "Tier" },
      { englishWord: "point", germanWord: "Punkt" },
      { englishWord: "mother", germanWord: "Mutter" },
      { englishWord: "world", germanWord: "Welt" },
      { englishWord: "build", germanWord: "bauen" },
      { englishWord: "self", germanWord: "selbst" }
    ];

    tmpData.map(x => dispatch(addWord(x.englishWord, x.germanWord)));
  };

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
        {!isDisabled && (
          <Button
            onClick={() => dispatch(changeAppMode(2))}
            size="small"
            disabled={isDisabled}
            color="inherit"
          >
            Challenge Yourself
          </Button>
        )}
        {isDisabled && (
          <Button
            onClick={() => fillWithMockData()}
            size="small"
            color="primary"
          >
            Fill With Mock Data
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Splash;
