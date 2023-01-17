import { PureComponent } from 'react';
import { nanoid } from 'nanoid';
import { StyledApp, Title } from './App.styled';
import { Form } from './ToDoEditor/ToDoForm';
import { Filter } from './FilterToDo/FilterTodo';
import ToDoList from './ToDoList';

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

  render() {
  
    return (
      <StyledApp>
        <Form onSubmit={this.addTodo}></Form>

        <Title>To do list :</Title>

        <Filter name={this.state.filter} onChange={this.changeFilter}></Filter>

        <ToDoList todo={this.filterContacts()} onDelete={this.deleteTodo}></ToDoList>
      </StyledApp>
    );
  }
}
