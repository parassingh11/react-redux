import React from 'react';
import  { connect } from 'react-redux';

function List({ todo }) {
    console.log('todo === ',todo);
    return (
      <div>
          {todo.map(item => {
              return <p key={item.id}>{item.title}</p>
          })}
     </div>
    )
}

const mapStateToProps = state => {
  return {
      todo: state.todo,
  }
}

const Lists = connect(mapStateToProps)(List);

export default Lists;