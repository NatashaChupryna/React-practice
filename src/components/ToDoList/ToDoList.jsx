import React from 'react';
import { List, Item } from './ToDoList.styled';

const ToDoList = ({ todo, onDelete }) => {
  return (
    <List>
        
      {todo.map(todo => (
        <Item key={todo.id}>
          {todo.text} <button onClick={() => onDelete(todo.id)}>Delete</button>
        </Item>
      ))}
    </List>
  );
};
export default ToDoList;
