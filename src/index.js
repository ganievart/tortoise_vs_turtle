import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
// import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./styles.css";
import ImageResults from "./components/image-results/ImageResults";
import NextButton from "./components/next/NextButton";
import { Provider } from 'react-redux';
import store from './store';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Grid container spacing={2} justify="center" align="center" alignItem="center">
          <Grid item xs={12}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <ImageResults />
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              {/* <Button>Turtle</Button>
              <Button>Tortoise</Button>
              <Button>WTF?!</Button> */}
              <NextButton>WTF?!</NextButton>
              {/* <NextButton>WTF?!</NextButton> */}
              {/* <NextButton>WTF?!</NextButton> */}
            </ButtonGroup>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));