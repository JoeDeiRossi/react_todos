import React from 'react';
import ToDoList from './to_do_list';
import AddToDoForm from './add_to_do_form';

const toDos = [
  {_id: '1', title: 'Fix car'},
  {_id: '2', title: 'Go to DMV'},
  {_id: '3', title: 'Finish prototypes'},
  {_id: '4', title: 'Transfer music to phone'}
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.addToDo = this.addToDo.bind(this);
  };

  componentDidMount() {
    this.getToDos();
  };

  addToDo(item) {
    const { list } = this.state;
    const _id = list.length + 1;
    this.setState({
      list: [
        ...list,
        {
          _id: _id,
          title: item.title
        }
      ]
    });
  };

  getToDos() {
    this.setState({
      list: toDos
    });
  };

  render() {
    const { list } = this.state;

    return (
      <div>
        <h1>To-Do List</h1>
        <ToDoList list={list} />
        <AddToDoForm add={this.addToDo} />
      </div>
    );
  };
};

export default App;
