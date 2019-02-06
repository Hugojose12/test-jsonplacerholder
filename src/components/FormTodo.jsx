import React, { Component } from 'react';
import api from '../api';

class FormTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      task: {},
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const users = await api.users.getUsers();

    this.setState({
      users,
    })
  }

  handleInput(e) {
    const { name, value } = e.target

    let TaskCopy = Object.assign({}, this.state.task);
    TaskCopy[name] = value;

    this.setState({task: TaskCopy})
    
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.task.id ? (
      console.log(this.state.task.id)
    ) : (
      console.log(this.state.task.title)
    )
    this.props.onAddTodo(this.state.task);
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h2 >Include Task</h2>
          <input className="form-control" name="title" placeholder="Enter Title Task" onChange={this.handleInput} />
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Users</label>
            </div>
            <select className="custom-select" name="userId" onChange={this.handleInput}>
              <option>Choose...</option>
              {this.state.users
								.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
							}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
		);
	}
}

export default FormTodo;