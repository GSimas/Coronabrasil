
import * as moment from 'moment.js';

var today = moment().format("MM-DD-YYYY");
var yesterday = moment().subtract(1, 'days').format("MM-DD-YYYY");

var url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + yesterday + '.csv';

var para = document.createElement("p");
var node = document.createTextNode(today);
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);