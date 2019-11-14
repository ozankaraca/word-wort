import React, { useState, useRef, useEffect } from "react";
import {
  Grid,
  TextField,
  FormHelperText,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  makeStyles
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addWord } from "../../actions/index";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  errorMessage: {
    color: theme.palette.error.main
  },
  successMessage: {
    color: green["A400"]
  }
}));

const AddWord = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [englishWord, setEnglishWord] = useState("");
  const [germanWord, setGermanWord] = useState("");
  const inputEnglishWord = useRef(null);
  const inputGermanWord = useRef(null);
  const wordList = useSelector(state => state.WordList);
  const [englishExists, setEnglishExists] = useState(false);
  const [germanExists, setGermanExists] = useState(false);

  useEffect(() => {
    setEnglishExists(
      wordList.find(
        x => x.englishWord.toLowerCase() === englishWord.toLowerCase()
      )
    );
    setGermanExists(
      wordList.find(
        x => x.germanWord.toLowerCase() === germanWord.toLowerCase()
      )
    );
  }, [englishWord, germanWord]);

  const saveData = () => {
    !englishWord &&
      inputEnglishWord.current.getElementsByTagName("input")[0].focus();
    !germanWord &&
      inputGermanWord.current.getElementsByTagName("input")[0].focus();
    if (englishWord && germanWord && !englishExists && !germanExists) {
      dispatch(addWord(englishWord, germanWord));
      setEnglishWord("");
      setGermanWord("");
      inputEnglishWord.current.getElementsByTagName("input")[0].focus();
    }
  };

  const handleEnter = ev => {
    if (ev.key === "Enter") {
      saveData();
      ev.preventDefault();
    }
  };
  return (
    <>
      <DialogTitle id="form-dialog-title">Add Word</DialogTitle>
      <DialogContent>
        <Grid spacing={2} justify="center" container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={englishWord}
              onChange={event => setEnglishWord(event.target.value)}
              onKeyPress={handleEnter}
              tabIndex="0"
              color="secondary"
              label="English Word"
              ref={inputEnglishWord}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={germanWord}
              onChange={event => setGermanWord(event.target.value)}
              onKeyPress={handleEnter}
              tabIndex="1"
              color="secondary"
              label="German Word"
              ref={inputGermanWord}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormHelperText>Fill The Words and Hit Enter</FormHelperText>
            <FormHelperText className={classes.errorMessage}>
              {germanExists && germanWord + " Exists in Vocabulary List. "}
              {englishExists && englishWord + " Exists in Vocabulary List. "}
            </FormHelperText>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.closeAction} tabIndex={-1} color="inherit">
          back
        </Button>
        <Button
          disabled={
            englishExists || !englishWord || germanExists || !germanWord
          }
          onClick={() => saveData()}
          tabIndex={-1}
          color="secondary"
        >
          ADD
        </Button>
      </DialogActions>
    </>
  );
};

export default AddWord;
