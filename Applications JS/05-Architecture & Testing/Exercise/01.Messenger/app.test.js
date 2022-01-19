const { chromium } = require('playwright');
const { expect } = require('chai');

const path = 'http://localhost:3000/Advanced JS/Applications JS/05-Architecture %26 Testing/Exercise/01.Messenger';
const DEBUG = true;

let browser;
let page;

describe('E2E tests', function () {
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

    it('initial load', async () => {
        await page.goto(path);

        const content = await page.textContent('#main');

        expect(content).to.contains('Name: ');
        expect(content).to.contains('Message: ');
    });

    it('"Refresh" button', async () => {
        await page.goto(path);

        const [request] = await Promise.all([
            page.waitForRequest(res => res.method() == 'GET'),
            page.click('text=Refresh')
        ]);

        const res = await request.response();
        const data = await res.json();
        const arrData = Object.values(data);

        expect(arrData[0].author).to.be.equal('Spami');
        expect(arrData[0].content).to.be.equal('Hello, are you there?');
        expect(arrData[1].author).to.be.equal('Garry');
        expect(arrData[1].content).to.be.equal('Yep, whats up :?');
    });

    it('"Submit" button', async () => {
        await page.goto(path);

        await page.click('text=Refresh');

        await page.fill('#author', 'Author-Test');
        await page.fill('#content', 'Content-Test');

        const [request] = await Promise.all([
            page.waitForRequest(res => res.method() == 'POST'),
            page.click('text=Send')
        ]);

        await page.click('text=Refresh');

        const data = JSON.parse(request.postData());
        expect(data.author).to.be.equal('Author-Test');
        expect(data.content).to.be.equal('Content-Test');
    });
});