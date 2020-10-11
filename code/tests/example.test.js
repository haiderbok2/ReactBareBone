const puppeteer = require('puppeteer');
const assert = require('assert');

// (async () => {
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000/');
//   await page.screenshot({path: 'example.png'});
//   assert.strictEqual(page.url(), 'http://localhost:3000/home' , 'test checking signin page url failed').catch((error) => {

//   });
//   await browser.close();
// })();

test("test sign in page url", async () => {
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  const url = await page.url();
  

  assert(url === 'http://localhost:3000/')
  await browser.close();

})