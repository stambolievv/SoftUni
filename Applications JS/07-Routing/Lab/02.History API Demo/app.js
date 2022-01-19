const main = document.querySelector('main');

const views = {
    '/home': () => '<h3>Home Page</h3><p>Welcome :)</p>',
    '/catalog': () => ' <h3> Catalog Page</h3> <ul><li>First</li><li>Second</li></ul>',
    '/about': () => '<h3>About Us Page</h3><p>Contact: +123-456-789</p>'
};

window.addEventListener('popstate', () => {
    console.log('History has change!');
    showContent();
});

document.body.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        history.pushState({}, '', e.target.href);
        showContent();
    }
});

function changePathname(pathname) {
    window.location.pathname = pathname;
}

function showContent() {
    const pathname = window.location.pathname.split('/').pop();
    try {
        main.innerHTML = views['/' + pathname]();
    } catch (error) {
        console.log(pathname);
        main.innerHTML = '<p>Page not found! <strong>Error: 404</strong></p>';
        console.error(error);
    }
}

showContent();