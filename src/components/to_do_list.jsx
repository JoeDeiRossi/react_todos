import React from 'react';
import ListItem from './list_item';

const toDos = [
  {id: '1', title: 'Fix car'},
  {id: '2', title: 'Go to DMV'},
  {id: '3', title: 'Finish prototypes'},
  {id: '4', title: 'Transfer music to phone'}
];

function ToDoList(props) {
  const toDoElements = toDos.map(item => {
    return <ListItem key={item.id} title={item.title} />
  });

  return <ol>{toDoElements}</ol>;
};

export default ToDoList;
