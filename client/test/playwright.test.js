let playwright = require('playwright');

let pageUrl = 'http://localhost:3000';
const delay = (ms) => new Promise(res => setTimeout(res, ms));

describe('Playwright tests', function () {
    let browser;
    let page;
    beforeEach(async () => {
        browser = await playwright['chromium'].launch();
        page = await browser.newPage();
    });

    afterEach(async () => {
        await browser.close();
    });

    it('home page', async () => {
        await page.goto(pageUrl);
        expect(await page.innerText('#home')).toBe('Home Page');
    });

    it('registration', async () => {
        const login = 'kek';
        const password = 'kek';
        await page.goto(pageUrl + '/registration');
        await page.fill('#input-login', login);
        await page.fill('#input-password', password);
        await page.click('#submit-button');
        await delay(10);
        expect(await page.innerText('#success')).toBe('You are logged in as ' + login);
    });

    it('authorization fail', async () => {
        const login = 'الْأَبْجَدِيَّة الْعَرَبِيَّة';
        const password = 'الْحُرُوف الْعَرَبِيَّة';
        await page.goto(pageUrl + '/login');
        await page.fill('#input-login', login);
        await page.fill('#input-password', password);
        await page.click('#submit-button');
        await delay(10);
        expect(await page.innerText('#fail')).toBe('Failed to login');
    });

    it('authorization after registration', async () => {
        const login = 'new login';
        const password = 'new password';
        // register new user
        await page.goto(pageUrl + '/registration');
        await page.fill('#input-login', login);
        await page.fill('#input-password', password);
        await page.click('#submit-button');
        await delay(10);
        expect(await page.innerText('#success')).toBe('You are logged in as ' + login);

        //log out
        await page.click('#logout-button');
        await delay(10);
        expect(await page.innerText('#home')).toBe('Home Page');

        //try to log in
        await page.goto(pageUrl + '/login');
        await page.fill('#input-login', login);
        await page.fill('#input-password', password);
        await page.click('#submit-button');
        await delay(10);
        expect(await page.innerText('#success')).toBe('You are logged in as ' + login);
    });

    it('about page', async () => {
        await page.goto(pageUrl + '/about');
        expect(await page.innerText('#about')).toBe('About Page');
    });
});