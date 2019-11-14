import React from "react";
import { Grid, Container, Box } from "@material-ui/core";
import Vocabulary from "../vocabulary/index";
import Quiz from "../quiz/index";

const Index = () => {
  return (
    <div>
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid
            justify="center"
            direction="row"
            style={{
              minHeight: "100vh"
            }}
            spacing={2}
            alignItems="center"
            container
          >
            <Grid item>
              <Vocabulary />
            </Grid>
            <Grid item>
              <Quiz />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Index;
