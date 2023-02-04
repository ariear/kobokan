const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.bmkg.go.id/';

const Kobokan = new Promise((resolve, reject) => {
axios.get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    const serviceBlocks = [];

    $('.service-block').each((i, el) => {
      const city = $(el).find('.kota').text();
      const temperature = $(el).find('.heading-md').text();
      const time = $(el).find('p:first-of-type').text();
      const image = 'https://www.bmkg.go.id/' + $(el).find('img').attr('src');
      const description = $(el).find('p:nth-of-type(2)').text();
      const block = { city, temperature, time, image, description };
      serviceBlocks.push(block);
    });

    resolve(JSON.stringify(serviceBlocks, null, 2))
  })
  .catch(error => {
    console.error(error);
  });

});

module.exports = Kobokan;