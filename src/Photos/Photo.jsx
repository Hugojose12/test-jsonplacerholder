import React, { Component } from 'react';

class Photo extends Component {

	render() {
		return (
			<div className="col-2">
				<picture>
					<source srcSet={this.props.thumbnailUrl} type="image/svg+xml" />
					<img src={this.props.url} className="img-fluid img-thumbnail" alt="..." />
      	</picture>
			</div>
		);
	}
}

export default Photo;