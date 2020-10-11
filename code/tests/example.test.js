const puppeteer = require('puppeteer');
const ScreenshotTester = require('puppeteer-screenshot-tester')
const assert = require('assert');


beforeAll(async () => {
   global.browser = await puppeteer.launch();
   global.page = await browser.newPage();
   global.tester = await ScreenshotTester(0.8, false, false, [], {});
});

/* test to check if the url takes us to the sign in page */
test("test sign in page url", async () => {

  await global.page.goto('http://localhost:3000/');
  const url = await global.page.url();
  
  await page.screenshot({path : 'signIn-screen.png'});
  assert(url === 'http://localhost:3000/')

})

/* Snapshot test for home screen */

test ("Snapshot testing of sign in page ", async () => {
  const result = await global.tester(global.page, "test1", {
    fullPage: true,
  });

  expect(result).toBe(true);
});

/* test to check if if hitting the submit button takes us to the home page */

test ("testing submit button routing to home page", async () => {
  
  const submit =  await page.$("#root > div > div > a");
  await submit.evaluate(submit => submit.click());
  const url = await global.page.url();
  await page.screenshot({path : 'home-screen.png'});
  assert(url === 'http://localhost:3000/home');

})


afterAll(async () => {
  await global.browser.close();
});



