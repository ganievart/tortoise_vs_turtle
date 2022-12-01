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

function App() {
  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={8} justify="center">
          <Search />
        </Grid>
        <Grid item xs={8} >
          <ImageResults />
        </Grid>
        <Grid item xs={8} justify="center">
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>Turtle</Button>
            <Button>Tortoise</Button>
            <Button>I don't know</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));