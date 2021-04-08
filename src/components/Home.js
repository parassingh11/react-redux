import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    console.log(this.props)
    const { todo } = this.props;
    return (
      <div className="container">
        {todo.map((todo) => {
          return (
            <div className="card mt-2 " key={todo.id}>
              <div className="card-body bg-primary">
                 <p className="bg-warning text-dark p-4">{todo.titile}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

export default connect(mapStateToProps)(Home);
