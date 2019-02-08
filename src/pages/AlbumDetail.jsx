import React, { Component } from 'react';
import api from '../api';
import Photo from '../Photos/Photo';

class AlbumDetail extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      photos: []
    };
  }
  
  async componentDidMount() {
    const photos = await api.gallery.getPhotos(this.props.match.params.albumId)
    
    this.setState({
      photos,
    })
  }
	
	render() {    
    return(
      <section name="AlbumDetail">
        <div className="row">
          {this.state.photos.map(photo => <Photo key={photo.id} {...photo} />)}
        </div>
      </section>
    );
  }
}

export default AlbumDetail;