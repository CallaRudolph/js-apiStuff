var Holiday = require('./../js/holiday.js').holidayModule;

var displayHolidays = function(holidays) {
  holidays.forEach(function(holiday) {
    console.log(holiday);
    $('.showResult').append("<li>" + holiday.name + " on " + holiday.date + "</li>");
  });
};

$(document).ready(function() {
  var currentHolidayObject = new Holiday();
  $('#input').click(function() {
    var country = $('#country').val();
    var year = $('#year').val();
    var month = $('#month').val();
    currentHolidayObject.getHolidays(country, year, month, displayHolidays);
  });
});
