var currentDayHeader = document.querySelector("#currentDay");
var today = moment(); 

$(currentDayHeader).text(today.format('dddd, MMMM Do, YYYY'));

