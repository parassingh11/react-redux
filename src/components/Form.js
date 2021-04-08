import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "./actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const forbiddenWords = ["spam", "money"];
    const foundWord = forbiddenWords.filter((word) => title.includes(word));
    if (foundWord) {
      return this.props.titleForbidden();
    }
    this.props.addArticle({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (todo) => dispatch(addArticle(todo)),
  };
};

const Forms = connect(null, mapDispatchToProps)(Form);

export default Forms;
