import React from 'react';
import { List, Item, Button } from './ToDoList.styled';

const ToDoList = ({ todo, onDelete }) => {
  return (
    <List>
      {todo.map(todo => (
        <Item key={todo.id}>
          {todo.text} <Button onClick={() => onDelete(todo.id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
export default ToDoList;
