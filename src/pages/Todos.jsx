import React, { Component } from 'react';
import Todo from '../Todos/Todo';
import api from '../api';
import FormTodo from '../components/FormTodo'

class Todos extends Component {
	constructor(props) {
		super(props); 
		
		this.state = {
			page: 1,
			todos: [],
		};
		
		this.handleAddTodo = this.handleAddTodo.bind(this); 
	} 

	async componentDidMount() {
		const todos = await api.todos.getTodos(this.state.page);

		this.setState({
			todos,  
		})
	}

	handleAddTodo(todo) {
		const LengthTodos = this.state.todos.length

		/* if (typeof todo.id === 'undefined'){
			todo.id = this.state.todos[LengthTodos - 1].id + 1
		}  */
    		todo.id = this.state.todos[LengthTodos - 1].id + 1
		this.setState({
			todos: [...this.state.todos, todo]
		})
	}

	render() {
		return (
			<section name="toDos">
				<div className="row m-0">
					<div className="col-3">
						<FormTodo onAddTodo={this.handleAddTodo}/>
					</div>
					<div className="col-9">
						<div className="card-columns">
							{this.state.todos
								.map(todo => <Todo key={todo.id} {...todo} />)
							}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Todos;
