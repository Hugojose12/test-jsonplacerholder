import React, { Component } from 'react';
import api from '../api';
import Album from '../Albums/Album';

class Gallery extends Component {

	constructor(props) {
		super(props);

		this.state = {
			page: 1,
			albums: [],
		};
	};

    async componentDidMount() {
			const albums = await api.gallery.getAlbums(this.state.page);

			this.setState({
				albums,
			})
		}
		

  render() {
    return (  
      <section>
				{this.state.albums
					.map(album => <Album key={album.id} {...album} />)
				}
			</section>
    );
  }
}

export default Gallery;