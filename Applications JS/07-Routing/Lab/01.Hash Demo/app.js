const main = document.querySelector('main');

const views = {
    '#home': () => '<h3>Home Page</h3><p>Welcome :)</p>',
    '#catalog': () => ' <h3> Catalog Page</h3> <ul><li>First</li><li>Second</li></ul>',
    '#about': () => '<h3>About Us Page</h3><p>Contact: +123-456-789</p>'
};

window.addEventListener('hashchange', (e) => {
    console.log('Hash has change!');
    console.log('New hash is ' + window.location.hash);
    onHashChange();
});

function changeHash(hash) {
    window.location.hash = hash;
}

function onHashChange() {
    const hash = window.location.hash;
    try {
        main.innerHTML = views[hash]();
    } catch (error) {
        main.innerHTML = '<p>Page not found! <strong>Error: 404</strong></p>';
        console.error(error);
    }
}

onHashChange();