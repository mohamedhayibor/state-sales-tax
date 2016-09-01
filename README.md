# state-sales-tax ![](https://img.shields.io/badge/status-stable-green.svg)

This npm module returns the (daily) updated sales tax by state (JSON).

## Installation
```
  > npm install state-sales-tax
```

## Usage

```js
const salesTax = require('state-sales-tax');

salesTax();
/* 
* ==> {"Alabama":"4.000%","Alaska":"0.000%"...} (JSON)
*/
```

## Raison d'être
The infomation about sales taxes are publicly available, there's no reason why you would use someone's api that you will have to sooner or later pay for.

## License
![](https://img.shields.io/badge/license-MIT-blue.svg) © [Mohamed Hayibor](https://github.com/mohamedhayibor)
