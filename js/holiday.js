var apiKey = require('./../.env').apiKey;

Holiday = function() {
};

Holiday.prototype.getHolidays = function(country, year, month, displayHolidays) {
  $.get('https://holidayapi.com/v1/holidays?key=' + apiKey + '&country=' + country + '&year=' + year + '&month=' + month).then(function(response) {
    displayHolidays(response.holidays);
  }).fail(function(error) {
    $('.showResult').text(error.responseText);
    console.log(error);
  });
};

exports.holidayModule = Holiday;
