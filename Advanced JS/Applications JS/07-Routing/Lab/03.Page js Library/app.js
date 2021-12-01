import page from '../../../../../node_modules/page/page.mjs';

const main = document.querySelector('main');

function homePage(ctx, next) {
    console.log(ctx);
    console.log(next);
    main.innerHTML = '<h3>Home Page</h3><p>Welcome :)</p>';
}

function catalogPage() {
    main.innerHTML = '<h3> Catalog Page</h3> <ul><li>First</li><li>Second</li></ul><a href="/catalog/58456">Buy</a>';
}

function detailsPage() {
    main.innerHTML = '<h3> Catalog Page</h3> <ul><li>Item: 58456</li></ul><button>Buy Now</button>';
    document.querySelector('button').addEventListener('click', () => {
        page.redirect('/checkout');
    });
}

function checkOutPage() {
    main.innerHTML = '<h3>Card Details</h3><p>Products in cart:</p>';
}

function aboutPage() {
    main.innerHTML = '<h3>About Us Page</h3><p>Contact: +123-456-789</p>';
}

page('/home', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/about', aboutPage);
page('/checkout', checkOutPage);


page.redirect('/', '/home');
page.start();