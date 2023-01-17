import { PureComponent } from 'react';
import {Title, AddInput, Button} from './ToDoForm.styled';

export class Form extends PureComponent {
  state = {
    message : ''
  };

handleChange = event => {
this.setState({ message : event.currentTarget.value})
}

handleSubmit = event => {
  event.preventDefault();
  
  this.props.onSubmit(this.state.message)
  this.resetForm()
}

resetForm = () => {
  this.setState({
    message : ''
  })
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Title>Add new task :</Title>
        <AddInput type="text" value={this.state.message} onChange={this.handleChange} />
        {/* <textarea value={this.state.message} onChange={this.handleChange}></textarea> */}
        <Button type='submit'>Add to list</Button>
      </form>
    );
  }
}
