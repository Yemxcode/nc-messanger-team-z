import React from "react";
import "./App.css";
import * as api from "./api";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Router } from "@reach/router";
import socketIOClient from "socket.io-client";

class App extends React.Component {
  state = {
    user: false,
    endpoint: false /*"http://127.0.0.1:4001"*/
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Login path="/login" myFunc={this.getUsersById} />
          <Signup path="/signup" myFunc={this.getUsersById} />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    api.getUsersById();
    // .then(user => {
    //   this.setState({ user: user });
    // });
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ user: data }));
  }
}

export default App;
