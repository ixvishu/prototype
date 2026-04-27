const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push('PAGEERROR: ' + err.message));
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  const content = await page.content();
  console.log('TITLE:', await page.title());
  console.log('BODY_LEN:', content.length);
  console.log('ERRORS:', errors);
  await browser.close();
})();
