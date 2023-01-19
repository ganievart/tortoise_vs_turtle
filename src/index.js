import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Alert from "./components/search/Alert";
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./styles.css";
import ImageResults from "./components/image-results/ImageResults";
import SendResponseButton from "./components/next/SendResponseButton";
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/400.css';

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
        <Grid container spacing={2} justify="center" align="center">
          <Grid item xs={12}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <ImageResults />
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <SendResponseButton text='Check' />
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <Alert />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);