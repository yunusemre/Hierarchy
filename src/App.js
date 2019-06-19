import React from "react";
import HomePage from "./containers/Home";
import { hot } from "react-hot-loader";

class App extends React.Component {
  render() {
    return (
      <HomePage />
    );
  }
}
export default hot(module)(App);
