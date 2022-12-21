//import puppeteer from 'puppeteer-core';
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.aliexpress.us/item/3256803595698439.html');
  //const resultsSelector = '.sku-property-list :nth-child(8) > div > img';
  const resultsSelector = '.sku-property-list';
  await page.waitForSelector(resultsSelector);

  await page.click(resultsSelector);

  const r = await page.evaluate(() => {


//    const t = [...document.querySelectorAll('.sku-property-list :nth-child(8) > div > img')][0].getAttribute('title');
//    const qsel = '#root > div > div.product-main > div > div.product-info > div.product-quantity.clearfix > div.product-quantity-info > div > span > span'
//    const q = [...document.querySelectorAll(qsel)][0].textContent;
//    return [t,q];

    //return [...document.querySelectorAll(resultsSelector)][0].childNodes.length[7]['title']
    return [...document.querySelectorAll('.sku-property-list > li > .sku-property-image > img'), 
            ...document.querySelectorAll('.sku-property-list > li > .sku-property-text > span')
           ].map(anchor => {
    //  const title = anchor.textContent.split('|')[0].trim();
//    anchor.click()
    const qsel = '#root > div > div.product-main > div > div.product-info > div.product-quantity.clearfix > div.product-quantity-info > div > span > span'
//    return q;
    anchor.click();
    const q = [...document.querySelectorAll(qsel)][0].textContent;
    if (anchor.tagName === 'IMG') {
      const t = anchor.getAttribute('title');
      return {[t]: q};
    } else if (anchor.tagName === 'SPAN') {
//    return anchor.tagName;
      const t = anchor.textContent;
      return {[t]: q}
    //  return title;
    }
    });
  });


  console.log(Object.assign({}, ...r));
  //console.log(links);
  await browser.close();


})();
