import { PureComponent } from 'react';

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
        <textarea value={this.state.message} onChange={this.handleChange}></textarea>
        <button type='submit'>Add to list</button>
      </form>
    );
  }
}
