'use strict';
const scraper = require('table-scraper');

module.exports = function() {
  let updatedSalesTaxes = 'http://www.salestaxinstitute.com/resources/rates';
  let result = {};

  scraper
    .get(updatedSalesTaxes)
    .then(function(tableData)  {
      let tempData = tableData[0];

      tempData.map( function (state) {
        let percentage = state['State Rate'];
        result[ state['State']  ] = percentage.slice(0, percentage.indexOf('%') + 1);
      });
    });

  return JSON.stringify(result);
}
