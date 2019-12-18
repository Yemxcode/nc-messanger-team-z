import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    room: ""
  };

  render() {
    return (
      <>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
          className="loginForm"
        >
          <label className="usernameLabel">
            {/* Username */}
            <input
              type="text"
              placeholder="   Username"
              value={this.state.username}
              id="username"
              className="loginFormItem"
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </label>
          <br />
          <label>
            {/* Room */}
            <input
              type="text"
              placeholder="   Room"
              value={this.state.avatar}
              id="room"
              className="loginFormItem"
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <br />
          </label>
          <button>ENTER</button>
        </form>
        <div className="signUpDirect">
          <p>Don't Have an Account?</p>
          <button>sign up</button>
        </div>
      </>
    );
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit(e) {
    const { username, avatar } = this.state;
    e.preventDefault();
    this.props.myFunc(username, avatar);
    this.setState({ username: "", room: "" });
  }
}
