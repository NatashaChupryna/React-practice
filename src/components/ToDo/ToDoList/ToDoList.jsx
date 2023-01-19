import React from 'react';
import { List, Item, Button, Checkbox } from './ToDoList.styled';

const ToDoList = ({ todo, onDelete, onToggle }) => {
  return (
    <List>
      {todo.map(todo => (
        <Item key={todo.id}>
          
          <Checkbox type="checkbox" 
          checked={todo.completed}
          onChange={()=>onToggle(todo.id)}/>

          {todo.text}
           <Button onClick={() => onDelete(todo.id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
export default ToDoList;
