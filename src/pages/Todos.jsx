import React, { Component } from 'react';
import Todo from '../Todos/Todo';
import api from '../api';

class Todos extends Component {
	constructor(props) {
		super(props); 
		
		this.state = {
			page: 1,
			todos: [],
		}; 
	} 

	async componentDidMount() {
		const todos = await api.todos.getTodos(this.state.page);

		this.setState({
			todos, 
		})
	}

	render() {
		return (
			<section name="toDos">
				<div className="row">
					{this.state.todos
						.map(todo => <Todo key={todo.id} {...todo} />)
					}
				</div>
			</section>
		);
	}
}

export default Todos;
