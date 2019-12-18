import React from "react";
import "./App.css";
import * as api from "./api";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

class App extends React.Component {
  state = {
    user: false
  };

  render() {
    return (
      <div className="App">
        <Login myFunc={this.getUsersById} />
        <Signup myFunc={this.getUsersById} />
      </div>
    );
  }

  componentDidMount() {
    api.getUsersById();
    // .then(user => {
    //   this.setState({ user: user });
    // });
  }
}

export default App;
