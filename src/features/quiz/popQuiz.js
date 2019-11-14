import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  Icon,
  Card,
  CardHeader,
  CardContent,
  CardActions
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center"
  }
}));

const PopQuiz = () => {
  const classes = useStyles();
  const [ready, setReady] = useState(true);
  const [currentEnglish, setCurrentEnglish] = useState("");
  const [currentGerman, setCurrentGerman] = useState("");
  const [isGermanToBeAsked, setIsGermanToBeAsked] = useState(true);
  return (
    <Container>
      <Grid
        spacing={2}
        container
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        {!ready && (
          <>
            <Grid xs={12} item>
              <Typography variant="h5" align="center">
                In this quiz, you will be asked 20 questions. WordWort will give
                you a German or English word, and you will write down the
                equivelant of the word in other language. When you feel ready,
                hit it on!
              </Typography>
            </Grid>
            <Grid xs={12} item>
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
            </Grid>
          </>
        )}
        <Grid item>
          <Card>
            <CardHeader title="Progress"></CardHeader>
            <CardContent>
              <Grid spacing={2} container>
                <Grid xs={12} item>
                  <TextField
                    disabled={isGermanToBeAsked}
                    fullWidth
                    autoFocus
                    label="In English"
                    value={currentEnglish}
                    onChange={event => setCurrentEnglish(event.target.value)}
                  ></TextField>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    disabled={!isGermanToBeAsked}
                    fullWidth
                    autoFocus
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
                  disabled={
                    isGermanToBeAsked ? !currentGerman : !currentEnglish
                  }
                  color="primary"
                >
                  Next
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopQuiz;
