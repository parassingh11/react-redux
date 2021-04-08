import React from 'react';

const Todos = ({ todos, deleteTodos }) => {
  const data = todos.length ? (
    todos.map(todo => {
      return(
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodos(todo.id)}}>{todo.name}</span>
        </div>
      )
    })
  ) : (
    <p className="center">list is empty......</p>
  ) 

    return (
      <div className="todos collection" >
        <div>{data}</div>
      </div>
    )
}

export default Todos;