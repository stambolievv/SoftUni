function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	const list = document.getElementById('repos');
	fetch(url)
		.then(response => {
			if (response.ok == false) { throw new Error(`${response.status} ${response.statusText}`); }
			return response.json();
		})
		.then(handleResponse)
		.catch(handleError);

	function handleResponse(data) {
		list.replaceChildren();
		for (const repo of data) {
			const liElement = document.createElement('li');
			const aElement = document.createElement('a');
			aElement.setAttribute('href', repo.html_url);
			aElement.textContent = repo.full_name;
			liElement.appendChild(aElement);
			list.appendChild(liElement);
		}
	}
	function handleError(error) {
		list.replaceChildren();
		list.textContent = error.message;
	}
}