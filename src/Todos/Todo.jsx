import React, { Component } from 'react';

class Todo extends Component {

	render() {
		return (
			<div className="card col-3">
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					{this.props.completed ? (
						<a href="/" className="btn btn-success">Completed</a>
					 ) : (
						<a href="/" className="btn btn-danger">Not Completed</a>
					 )}					
				</div>
			</div>
		);
	}
}

export default Todo;