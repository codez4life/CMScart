import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

//Load Components
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
