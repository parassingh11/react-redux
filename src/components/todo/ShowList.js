import React, { Component } from "react";

export default class ShowList extends Component {
  constructor(props) {
    super(props);
  }

  deleteItem = (id) => {
    this.props.deleteItemList(id);
  }

  render() {
    return (
      <div className="container mt-3">
        <ul class="list-group">
          {this.props.todo.map((todo) => {
            return (
              <li onClick={(e) => {this.deleteItem(todo.id)}} key={todo.id} class="list-group-item mt-1 bg-success">
                {todo.item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
