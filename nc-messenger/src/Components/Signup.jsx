import React from "react";
import ErrorDisplay from "./ErrorDisplay";

export default class SignUp extends React.Component {
  state = {
    isLoading: true,
    username: "",
    profileImg: "",
    error: null
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //api request to send details username and profileImg to back end, is success redirect to login page, if error .catch  will say if username has been used or not
  };

  render() {
    const { error, username, isLoading, profileImg } = this.state;
    if (isLoading) return <h2>Loading ....</h2>;
    return (
      <>
        {error && <ErrorDisplay error={error} />}
        <form className="SignUp-form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="username"
            placeholder="username"
            value={username}
            className="SignUp-input"
            required
          />
          <input
            onChange={this.handleChange}
            name="profileImg"
            placeholder="avatar URL"
            value={profileImg}
            type="text"
            className="SignUp-input"
          />
          <button type="submit">Sign Up</button>
        </form>
      </>
    );
  }
}
