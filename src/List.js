import React from 'react';

class List extends React.Component {
    render() {
        const {list, deleteList} = this.props;
        const renderList = list.map((list) => {
            return (
                <div key={list.id}>
                    <div>{list.id}</div>
                    <div>{list.name}</div>
                    <button onClick={() => {deleteList(list.id)}}>delete list</button>
                </div>
            )
        })
        return(
          <div>{renderList}</div>
        )
    }
}

export default List;