const { chromium } = require('playwright');
const { expect } = require('chai');

const path = 'http://localhost:3000/Advanced JS/Applications JS/05-Architecture %26 Testing/Exercise/02.Book-Library';
const DEBUG = true;

let browser;
let page;

describe('E2E tests', async function () {

    if (DEBUG) {
        this.timeout(120000);
    } else {
        this.timeout(6000);
    }

    before(async () => {
        browser = await chromium.launch(DEBUG ? { headless: false, slowMo: 1000 } : '');
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });


    it('load and display', async () => {
        await page.goto(path);

        await page.click('text=Load All Books');
        await page.waitForSelector('text=Harry Potter');

        const rows = await page.$$eval('tr', (row) => row.map(r => r.textContent));

        expect(rows[1]).to.contains('Harry Potter');
        expect(rows[1]).to.contains('Rowling');
        expect(rows[2]).to.contains('C# Fundamentals');
        expect(rows[2]).to.contains('Nakov');
    });

    it('create book', async () => {
        await page.goto(path);

        await page.click('text=Load All Books');
        await page.waitForSelector('text=Harry Potter');

        await page.fill('form#createForm >> input[name="title"]', 'Title');
        await page.fill('form#createForm >> input[name="author"]', 'Author');

        const [request] = await Promise.all([
            page.waitForRequest(res => res.method() == 'POST'),
            page.click('form#createForm >> text=Submit')
        ]);

        await page.click('text=Load All Books');

        const data = JSON.parse(request.postData());
        expect(data.title).to.be.equal('Title');
        expect(data.author).to.be.equal('Author');
    });

    it('edit book', async () => {
        await page.goto(path);

        await page.click('text=Load All Books');
        await page.waitForSelector('text=Harry Potter');

        await page.click('text=Edit');

        await page.fill('form#editForm >> input[name="title"]', 'Renamed Title');
        await page.fill('form#editForm >> input[name="author"]', 'Renamed Author');

        const [request] = await Promise.all([
            page.waitForRequest(res => res.method() == 'PUT'),
            page.click('form#editForm >> text=Save')
        ]);

        await page.click('text=Load All Books');


        const data = JSON.parse(request.postData());
        expect(data.title).to.be.equal('Renamed Title');
        expect(data.author).to.be.equal('Renamed Author');
    });

    it('delete book', async () => {
        await page.goto(path);

        await page.click('text=Load All Books');
        await page.waitForSelector('text=Fundamentals');

        page.on('dialog', async dialog => { await dialog.accept(); });

        await Promise.all([
            page.waitForRequest(res => res.method() == 'DELETE'),
            page.click('text=Delete')
        ]);

        await page.click('text=Load All Books');

        const books = await page.$$eval('tbody > tr > td', r => r.map(td => td.textContent));
        expect(books[0]).to.be.equal('C# Fundamentals');
        expect(books[1]).to.be.equal('Svetlin Nakov');
    });

});