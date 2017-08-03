var Holiday = require('./../js/holiday.js').holidayModule;

var displayHolidays = function(holidays) {
  if (holidays.length === 0) {
    $('.showResult').append("There are no holidays for this search.");
  } else {
    holidays.forEach(function(holiday) {
      $('.showResult').append("<li>" + holiday.name + " on " + holiday.date + "</li>");
    });
  }
};

$(document).ready(function() {
  var currentHolidayObject = new Holiday();
  $('#input').click(function() {
    $('.showResult').empty();
    var country = $('#country').val();
    var year = $('#year').val();
    var month = $('#month').val();
    currentHolidayObject.getHolidays(country, year, month, displayHolidays);
  });
});
