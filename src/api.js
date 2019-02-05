const baseUrl = 'https://jsonplaceholder.typicode.com'

const api = {
  posts: {
    async getList(page = 1) {
			const responde = await fetch (`${baseUrl}/posts?_page=${page}`);
			const data = await responde.json();
			return data;
		},

		async getSingle(id = 1) {
			const responde = await fetch (`${baseUrl}/posts/${id}`);
			const data = await responde.json();
			return data;
		},

		async getComments(id = 1) {
			const responde = await fetch (`${baseUrl}/posts/${id}/comments`);
			const data = await responde.json();
			return data;
		},
	},
	users: {
		async getSingle(id = 1) {
			const responde = await fetch (`${baseUrl}/users/${id}`);
			const data = await responde.json();
			return data;
		},
		async getPosts(id = 1) {
			const responde = await fetch (`${baseUrl}/posts/?userId=${id}`);
			const data = await responde.json();
			return data;
		}
	},
	todos: {
		async getTodos(page = 1) {
			const responde = await fetch (`${baseUrl}/todos?_page=${page}`);
			const data = await responde.json();
			return data;
		},
	},
};

export default api;