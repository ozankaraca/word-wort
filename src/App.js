import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import MainScreen from "./features/mainScreen/index";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  deepPurple,
  amber,
  yellow,
  green,
  pink
} from "@material-ui/core/colors";

function App() {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
          primary: {
            main: green["A200"]
          },
          secondary: {
            main: pink["A200"]
          }
        }
      }),
    []
  );
  const muiTheme = createMuiTheme(theme);
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="App">
        <MainScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
