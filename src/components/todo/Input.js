import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({username: ''});
  };

  myChangeHandler = (event) => {
    let val = event.target.value;
    this.setState({ username: val });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row ">
          <div className="col-8">
            <input 
              className="w-100 bg-info form-control" 
              type="text" 
              value={this.state.username}
              placeholder="Enter Task"
              onInput={this.myChangeHandler}  
            />
          </div>
          <div className="col-4">
            <button onClick={this.mySubmitHandler}  className="btn btn-warning p-10">Add</button>
          </div>
        </div>
      </div>
    );
  }
}
