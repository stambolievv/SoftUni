const playwright = require('playwright');
const { expect } = require('chai');

const host = 'http://localhost:3000/Advanced JS/Applications JS/05-Architecture %26 Testing/Lab/01.Accordion';

let browser, page;

describe('E2E test', async function () {
    this.timeout(10000);

    before(async () => { browser = await playwright.chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('initial load', async () => {
        await page.goto(host);
        await page.waitForSelector('.accordion');

        const content = await page.textContent('#main');
        expect(content).to.contains('Scalable Vector Graphics');
        expect(content).to.contains('Open standard');
        expect(content).to.contains('Unix');
        expect(content).to.contains('ALGOL');
    });

    it('"More" button', async () => {
        await page.goto(host);
        await page.waitForSelector('.accordion');

        await page.click('text=More');
        await page.waitForResponse(/articles\/details/i);

        await page.waitForSelector('.accordion p');
        const visible = await page.isVisible('.accordion p');

        expect(visible).to.be.true;
    });

    it('"Less" button', async () => {
        await page.goto(host);
        await page.waitForSelector('.accordion');

        await page.click('text=More');
        await page.waitForResponse(/articles\/details/i);

        await page.waitForSelector('.accordion p', { state: 'visible' });

        await page.click('text=Less');

        const visible = await page.isVisible('.accordion p');
        expect(visible).to.be.false;
    });
});