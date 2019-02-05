import React, { Component } from 'react';
import api from '../api';
import Post from '../Posts/Post';
import Loading from '../shared/loading';

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			page: 1,
			posts: [],
			loading: true,
		};

		this.handleScroll = this.handleScroll.bind(this);
	};

    async componentDidMount() {
			const posts = await api.posts.getList(this.state.page);

			this.setState({
				posts,
				page: this.state.page + 1,
				loading: false,
			})

			window.addEventListener('scroll', this.handleScroll);
		}
		
		componentWillUnmount() {
			window.removeEventListener('scroll', this.handleScroll);
		}

		handleScroll(event) {
			if (this.state.loading) return null;

			const scrolled = window.scrollY;
			const viewportHeight = window.innerHeight;
			const fullHeight = document.body.clientHeight;	
			
			if(!(scrolled + viewportHeight + 200 >= fullHeight)) {
				return null;
			}

			this.setState({loading: true}, async() =>	{
				try {
					const posts = await api.posts.getList(this.state.page);
					this.setState({
						posts: this.state.posts.concat(posts),
						page: this.state.page + 1,
						loading: false,
					});
				} catch (error) {
					console.log(error);
					this.setState({loading: false});
				}
			});
		}

  render() {
    return (  
      <section>
				{this.state.loading && (
					<Loading />
				)}
				{this.state.posts
					.map(post => <Post key={post.id} {...post} />)
				}
			</section>
    );
  }
}

export default Home;