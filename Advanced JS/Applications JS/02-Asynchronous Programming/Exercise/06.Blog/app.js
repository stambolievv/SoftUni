function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}
attachEvents();

async function displayPost() {
    const selectElementId = document.getElementById('posts').value;
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    postTitle.textContent = 'Loading...';
    postBody.textContent = '';
    postComments.replaceChildren();

    const [post, comments] = await Promise.all([
        getValues('posts', selectElementId),
        getValues('comments', selectElementId)
    ]);

    postTitle.textContent = post.title;
    postBody.textContent = post.body;

    comments.forEach(c => {
        const liElement = document.createElement('li');
        liElement.textContent = c.text;
        postComments.appendChild(liElement);
    });
}

async function getPosts() {
    const data = await getValues('posts');

    const selectElement = document.getElementById('posts');
    selectElement.replaceChildren();
    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;
        selectElement.appendChild(optionElement);
    });
}

async function getValues(type, postId) {
    try {
        let url = `http://localhost:3030/jsonstore/blog/${type}`;
        if (type == 'posts' && postId) { url += '/' + postId; }

        const res = await fetch(url);
        if (res.status != 200) { throw new Error(`${res.status} ${res.statusText}`); }

        const data = await res.json();

        if (type == 'comments') { return Object.values(data).filter(p => p.postId == postId); }
        return data;
    } catch (err) {
        console.error(err.message);
    }
}