// Dependencies:
var request = require('request'); // Snatches html from urls
var cheerio = require('cheerio'); // Scrapes our html

// what this scrape is doing
console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from craftsy website:" +
            "\n******************************************\n")

// make a request call for homepage 
request('https://https://www.craftsy.com/cake-decorating', function (error, response, html) {

  // load the body of the html into cheerio
  var $ = cheerio.load(html);

  // an empty array to save our scraped data
  var result = [];

  // With cheerio, find each a-tag which is the headline"
  $('a').each(function(i, element){

      // save the text of the h4-tag as "title"
      var title = $(this).text();

      // for each a-tag, make an object with data we scraped
      // and push it to the result array
      result.push({
        title:title,
        link:link
      });
    });

  // after the program scans each h4.headline-link, log the result
  console.log(result);
});