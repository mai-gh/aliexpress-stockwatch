const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.aliexpress.us/item/3256803595698439.html');
  const resultsSelector = '.sku-property-list';
  await page.waitForSelector(resultsSelector);
  await page.click(resultsSelector);

  const r = await page.evaluate(() => {
    return [...document.querySelectorAll('.sku-property-list > li > .sku-property-image > img'), 
            ...document.querySelectorAll('.sku-property-list > li > .sku-property-text > span')
           ].map(anchor => {
      const qsel = '#root > div > div.product-main > div > div.product-info > div.product-quantity.clearfix > div.product-quantity-info > div > span > span'
      anchor.click();
      const q = [...document.querySelectorAll(qsel)][0].textContent;
      if (anchor.tagName === 'IMG') {
        const t = anchor.getAttribute('title');
        return {[t]: q};
      } else if (anchor.tagName === 'SPAN') {
        const t = anchor.textContent;
        return {[t]: q}
      }
    });
  });

  console.log(Object.assign({}, ...r));
  await browser.close();
})();
