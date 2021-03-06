import React, { Component } from 'react';
import Post from '../Posts/Post';
import api from '../api';
import Loading from '../shared/loading';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      posts: [],
      loading: true,
    };
  }

  async componentDidMount() {
		const [
			user,
			posts,
		] = await Promise.all([
			api.users.getSingle(this.props.match.params.id),
			api.users.getPosts(this.props.match.params.id),
		]);


		this.setState({
			user,
      posts,
      loading: false,
		});
  }
  
  render() {
    if (this.state.loading){
      return <Loading />
    }
    return(
			<section>        
				<h2>Profile of {this.state.user.name}</h2>
        
        <fieldset>
          <legend>Basic Info</legend>
          <input type="email" value={this.state.user.email} disabled />
        </fieldset>

        {this.state.user.address && (
          <fieldset>
            <legend>Address</legend>
            <address>
              {this.state.user.address.street} <br/>
              {this.state.user.address.suite} <br/>
              {this.state.user.address.city} <br/>
              {this.state.user.address.zipcode} <br/>
            </address>
          </fieldset>
        )}

        <section>
          {this.state.posts
            .map(post => <Post key={post.id} user={this.state.user} {...post} />)          
          }
        </section>
			</ section>
    );
  }
}

export default Profile;