const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://radrex.github.io');
  debugger;
  await browser.close();
})();