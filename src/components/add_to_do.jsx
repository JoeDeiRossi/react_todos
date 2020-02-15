import React from 'react';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <form>
        <h1>Add To-Do</h1>

        <div>
          <label htmlFor="title">Title: </label>
          <input value={this.state.title} onChange={this.handleChange} type="text" id="title"/>
        </div>
      </form>
    )
  }
}

export default AddToDo;
