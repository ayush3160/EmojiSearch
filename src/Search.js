import React, { Component } from "react";

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      emoji: "",
    };
  }

  render() {
    const handleChange = (e) => {
      this.setState({ emoji: e.target.value });
      this.props.submit(e);
    };
    return (
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Emoji Search"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleChange}
          value={this.state.emoji}
        />
      </div>
    );
  }
}
