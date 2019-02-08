import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../api';
import { Link } from 'react-router-dom';

class Album extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {},
			photos: [],
		};
	}

	async componentDidMount() {

		const [
			user,
			photos,
		] = await Promise.all([
			api.users.getSingle(this.props.userId),
			api.gallery.getPhotos(this.props.albumId),
		]);


		this.setState({
			user,
			photos
		});
	}

  render() {
		return(
			<article id={`album-${this.props.id}`}>
				<Link to = {`/album/${this.props.id}/photos`}>
					<h2>{this.props.title}</h2>
				</Link>
				<div>
						<Link to={`/user/${this.state.user.id}`}>
						{this.state.user.name}
						</Link>
					</div>
			</article>
		)
	}
}


export default Album;