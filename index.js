const axios = require('axios');
const cheerio = require('cheerio');
const region = require('./db');

async function webScraper(url) {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const data = $('tbody').text();
    const towns = data.split("\n");
    return towns;
}

(async function(){
    const result = await webScraper('https://welcome.topuertorico.org/reference/zipcodes-by-num.shtml');
    result.map((town) => {
        if(town !== undefined) {
            const newRegion = new region({zipcode: town.slice(0, 5), name: town.slice(5, result.length)});
            newRegion.save();
        }
    })
})();