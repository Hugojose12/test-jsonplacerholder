import React, { Component } from 'react';
import api from '../api';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {},
		};
	}

	async componentDidMount() {
		const user = await api.users.getSingle(this.props.userId);

		this.setState({
			user,
		});
	}

	render() {
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					{this.props.completed ? (
						<a href="/" className="btn btn-primary">Completed</a>
					 ) : (
						<a href="/" className="btn btn-danger">Not Completed</a>
					 )}					
				</div>
				<div className="card-footer">
      		<small className="text-muted">{this.state.user.name}</small>
    		</div>
			</div>
		);
	}
}

export default Todo;