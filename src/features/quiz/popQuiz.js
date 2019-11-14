import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Icon,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  LinearProgress,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: "center"
  },
  textError: {
    textDecoration: "line-through",
    marginLeft: "10px"
  }
}));

const PopQuiz = () => {
  const classes = useStyles();
  const [ready, setReady] = useState(false);
  const [currentEnglish, setCurrentEnglish] = useState("");
  const [currentGerman, setCurrentGerman] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isGermanToBeAsked, setIsGermanToBeAsked] = useState(false);
  const [resultList, setResultList] = useState([]);
  const englishEl = useRef();
  const germanEl = useRef();
  const [questionSet] = useState(
    useSelector(state => state.WordList)
      .sort(() => 0.5 - Math.random())
      .slice(0, 20)
  );

  let resultSuccessRate = Math.round(
    (resultList.filter(
      x =>
        x.questionEnglish.toLowerCase() === x.answerEnglish.toLowerCase() &&
        x.questionGerman.toLowerCase() === x.answerGerman.toLowerCase()
    ).length /
      (resultList ? resultList.length : 1)) *
      100
  );

  const handleAnswer = () => {
    let tmpObj = {
      questionGerman: questionSet[currentStep].germanWord,
      answerGerman: currentGerman,
      questionEnglish: questionSet[currentStep].englishWord,
      answerEnglish: currentEnglish,
      wasGerman: isGermanToBeAsked
    };
    let tmpArray = resultList;
    tmpArray.push(tmpObj);
    setResultList(tmpArray);

    setIsGermanToBeAsked(Math.random() >= 0.5);
    setCurrentStep(currentStep + 1);
  };
  useEffect(() => {
    englishEl.current && englishEl.current.focus();
  }, [ready]);
  useEffect(() => {
    if (currentStep < 20) {
      setCurrentEnglish(
        isGermanToBeAsked ? questionSet[currentStep].englishWord : ""
      );
      setCurrentGerman(
        isGermanToBeAsked ? "" : questionSet[currentStep].germanWord
      );
      isGermanToBeAsked
        ? germanEl.current && germanEl.current.focus()
        : englishEl.current && englishEl.current.focus();
    }
  }, [currentStep]);

  const handleEnter = ev => {
    if (ev.key === "Enter") {
      currentGerman && currentEnglish && handleAnswer();
      ev.preventDefault();
    }
  };

  return (
    <Container>
      <Grid
        spacing={2}
        container
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        {!ready && currentStep < 20 && (
          <>
            <Grid xs={12} item>
              <Box mt={10}>
                <Typography variant="h5" align="center">
                  In this quiz, you will be asked 20 questions. WordWort will
                  give you a German or English word, and you will write down the
                  equivelant of the word in other language. When you feel ready,
                  hit it on!
                </Typography>
              </Box>
            </Grid>
            <Button
              onClick={() => {
                setReady(true);
              }}
              size="large"
              variant="contained"
              color="primary"
            >
              READY
            </Button>
          </>
        )}
        {ready && currentStep < 20 && (
          <Grid item>
            <Card>
              <CardHeader
                title={
                  <LinearProgress
                    variant="buffer"
                    value={currentStep * 5}
                    valueBuffer={100}
                  ></LinearProgress>
                }
              ></CardHeader>
              <CardContent>
                <Grid spacing={2} container>
                  <Grid xs={12} item>
                    <TextField
                      disabled={isGermanToBeAsked}
                      inputRef={englishEl}
                      onKeyPress={handleEnter}
                      fullWidth
                      label="In English"
                      value={currentEnglish}
                      onChange={event => setCurrentEnglish(event.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      disabled={!isGermanToBeAsked}
                      inputRef={germanEl}
                      onKeyPress={handleEnter}
                      fullWidth
                      label="In German"
                      value={currentGerman}
                      onChange={event => setCurrentGerman(event.target.value)}
                    ></TextField>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid container justify="flex-end">
                  <Button
                    onClick={handleAnswer}
                    disabled={
                      isGermanToBeAsked ? !currentGerman : !currentEnglish
                    }
                    color="primary"
                  >
                    {currentStep < 19 ? "Next" : "Finish"}
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        )}

        {currentStep === 20 && (
          <>
            <Grid item xs={12}>
              <Typography
                color={resultSuccessRate < 49 ? "error" : "primary"}
                align="center"
                variant="h4"
              >
                <Box fontWeight={900}>Success Rate: {resultSuccessRate}%</Box>
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <List>
                {resultList.map((result, index) => {
                  let wasCorrect = result.wasGerman
                    ? result.questionGerman.toLowerCase() ===
                      result.answerGerman.toLowerCase()
                    : result.questionEnglish.toLowerCase() ===
                      result.answerEnglish.toLowerCase();
                  return (
                    <ListItem divider key={index}>
                      {result.wasGerman && (
                        <>
                          <ListItemText
                            primary={
                              <>
                                <Typography display="inline">
                                  {result.questionGerman}
                                </Typography>
                                <Typography
                                  align="right"
                                  display="inline"
                                  color="error"
                                  variant="subtitle2"
                                  className={classes.textError}
                                >
                                  {!wasCorrect && result.answerGerman}
                                </Typography>
                              </>
                            }
                            secondary={result.questionEnglish}
                          ></ListItemText>
                        </>
                      )}
                      {!result.wasGerman && (
                        <>
                          <ListItemText
                            primary={
                              <>
                                <Typography display="inline">
                                  {result.questionEnglish}
                                </Typography>
                                <Typography
                                  align="right"
                                  display="inline"
                                  color="error"
                                  variant="subtitle2"
                                  className={classes.textError}
                                >
                                  {!wasCorrect && result.answerEnglish}
                                </Typography>
                              </>
                            }
                            secondary={result.questionGerman}
                          ></ListItemText>
                        </>
                      )}
                      <ListItemSecondaryAction>
                        <Icon color={wasCorrect ? "primary" : "error"}>
                          {wasCorrect ? "check_circle_outline" : "close"}
                        </Icon>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default PopQuiz;
