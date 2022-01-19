const playwright = require('playwright');

(async () => {
    for (const browserType of [playwright.chromium, playwright.firefox, playwright.webkit]) {
        const browser = await browserType.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://google.com/');
        await page.screenshot({ path: `example-${browserType.name()}.png` });
        await browser.close();
    }
})();