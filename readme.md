## CLI utility to watch stock levels of a listing on aliexpress

Uses [puppeteer](https://pptr.dev/) as a headless browser to run necessary front end javascript to obtain relevant data.

---

### My use case: 

I want to get an item on aliexpress, but it is currently out of stock. 

I want to know when this specific item comes back in stock. 

This tool can be chained with other cli tools to trigger a notification sent to me.

---

### Usage:

```
$ node index.js
```

```javascript
{
  'White for Button': '12 Pieces available ',
  'Only for V1 Screen': 'Only 0 left ',
  'V2 Conductive pads': '20 Pieces available ',
  'Zipper bag': 'Only 0 left ',
  'Only for V2 Screen': 'Only 0 left ',
  'Retro Grey  Button': 'Only 0 left ',
  'V1 motherboard': 'Only 0 left ',
  'V2 motherboard': 'Only 0 left '
}
```


