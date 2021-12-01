function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    const list = document.getElementById('commits');
    fetch(url)
        .then(response => {
            if (response.ok == false) { throw new Error(`${response.status} ${response.statusText}`); }
            return response.json();
        })
        .then(handleResponse)
        .catch(handleError);

    function handleResponse(data) {
        list.replaceChildren();
        for (const commits of data) {
            const liElement = document.createElement('li');
            const aElement = document.createElement('a');
            aElement.setAttribute('href', commits.url);
            aElement.textContent = `${commits.commit.author.name}: ${commits.commit.message}`;
            liElement.appendChild(aElement);
            list.appendChild(liElement);
        }
    }
    function handleError(error) {
        list.replaceChildren();
        list.textContent = error.message;
    }
}