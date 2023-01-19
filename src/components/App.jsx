import { PureComponent } from 'react';
import { nanoid } from 'nanoid';
import {ToDoListDiv , StyledApp, Title } from './App.styled';
import { Form } from './ToDo/ToDoEditor/ToDoForm';
import { Filter } from './ToDo/Filter/FilterTodo';
import ToDoList from './ToDo/ToDoList/ToDoList';
import { Reader } from './Reader/Reader';
import  publications  from "../components/Reader/Data/publications.json";

export class App extends PureComponent {
  state = {
    todos: [
      { id: 'id-1', text: 'make sandvich', completed: false },
      { id: 'id-2', text: 'pet the cat', completed: true },
      { id: 'id-3', text: 'water flowers', completed: false },
      { id: 'id-4', text: 'house cleaning', completed: true },
    ],
    filter: '',
  };

  addTodo = text => {
    const newTodo = {
      id: nanoid(),
      text: text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  changeFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toUpperCase();
    return todos.filter(todo =>  { 
      return todo.text.toUpperCase().includes(normalizedFilter)}
    );
  };

  toogleComlete = id => {
this.setState(prevState => ({
  todos : prevState.todos.map(todo => {
    if(todo.id === id){
      return {...todo,
      completed : !todo.completed}
    }
    return todo
  })
}))
  }


  render() {
const completedTodos = this.state.todos.reduce((acc, todo)=>( todo.completed ? acc +1 : acc),0)
console.log( typeof this.state.todos) 

return (
      <StyledApp>
        <ToDoListDiv >
        <Form onSubmit={this.addTodo}></Form>
        <Title>To do list :</Title>
        <Filter name={this.state.filter} onChange={this.changeFilter}></Filter>
        <ToDoList todo={this.filterContacts()} onDelete={this.deleteTodo} onToggle={this.toogleComlete}></ToDoList>
     <p>All tasks : {this.state.todos.length}</p>
      <p>Done :  {completedTodos}</p>
      </ToDoListDiv>

      <Reader items={publications}></Reader>
      </StyledApp>
    );
  }
}
