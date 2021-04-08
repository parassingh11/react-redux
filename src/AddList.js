import React from 'react';

class AddList extends React.Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addList(this.state);
    }

    render() {
        return(
            <div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handleChange} />
                <button>Submit</button>
              </form>
            </div>
        )
    }
}

export default AddList;