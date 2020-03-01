const moment = require('moment');
const cheerio = require('cheerio');
const rp = require('request-promise');

var today = moment().format("MM-DD-YYYY");
var yesterday = moment().subtract(1, 'days').format("MM-DD-YYYY");

var url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + today + '.csv';
const response = cheerio.load(url)

rp(url)
  .then(function(data){
    //success!
    var data_array = data.split(',');
    var brazil_index = data_array.indexOf('Brazil');
    var brazil_cases = data[brazil_index + 2];
    console.log(brazil_cases);
  })
  .catch(function(err){
    //handle error
  });

  
  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);

  var element = document.getElementById("div1");
  element.appendChild(para);