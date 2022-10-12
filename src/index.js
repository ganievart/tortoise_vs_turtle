import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);