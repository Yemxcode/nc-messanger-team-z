import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    avatar: ""
  };

  render() {
    return (
      <>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <label>
            Username
            <input
              type="text"
              placeholder="username"
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
            Avatar URL
            <input
              type="text"
              placeholder="avatar URL"
              value={this.state.avatar}
              id="avatar"
              className="loginFormItem"
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <br />
          </label>
          <button>ENTER</button>
        </form>
      </>
    );
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit(e) {
    const { username, avatar } = this.state;
    e.preventDefualt();
    this.props.myFunc(username, avatar);
    this.setState({ username: "", avatar: "" });
  }
}
