var currentDayHeader = document.querySelector("#currentDay");
var today = moment(); 
var description = document.querySelector(".description")

var nineAM = document.querySelector("#nineAM")
var nineAMValue = $('#nineAM').val()

var tenAM = document.querySelector("#tenAM")

var saveBtn = document.querySelector(".saveBtn")

$(currentDayHeader).text(today.format('dddd, MMMM Do, YYYY'));

var tasks = {};


$(document).ready(function () {

  //This function called when the saveBtn is clicked
  $(".saveBtn").click(function() {
    // val() method is used to get the values from
    // textarea and stored in txt variable
    var nineAMText = $("#nineAM").val().trim();
    var tenAMText = $("#tenAM").val().trim();
    var elevenAMText = $("#elevenAM").val().trim();
    var twelvePMText = $("#twelvePM").val().trim();
    var onePMText = $("#onePM").val().trim();
    var twoPMText = $("#twoPM").val().trim();
    var threePMText = $("#threePM").val().trim();
    var fourPMText = $("#fourPM").val().trim();
    var fivePMText = $("#fivePM").val().trim();


    // set the item in localStorage
    localStorage.setItem('nineAMText', nineAMText)
    localStorage.setItem('tenAMText', tenAMText)
    localStorage.setItem('elevenAMText', elevenAMText)
    localStorage.setItem('twelvePMText', twelvePMText)
    localStorage.setItem('onePMText', onePMText)
    localStorage.setItem('twoPMText', twoPMText)
    localStorage.setItem('threePMText', threePMText)
    localStorage.setItem('fourPMText', fourPMText)
    localStorage.setItem('fivePMText', fivePMText)
    
    // console log the value to check if we got it
    console.log(localStorage.getItem('elevenAMText'));
    console.log(localStorage.getItem('twelvePMText'));

  });
});


function nineAMGetValue() {
  var storedText = localStorage.getItem("nineAMText")
  if(storedText != null){
    document.querySelector("#nineAM").value = storedText
  } else {
    document.querySelector("#nineAM").value = ""
  }
}

function tenAMGetValue() {
  var storedText = localStorage.getItem("tenAMText")
  if(storedText != null){
    document.querySelector("#tenAM").value = storedText
  } else {
    document.querySelector("#tenAM").value = ""
  }
}

function elevenAMGetValue() {
  var storedText = localStorage.getItem("elevenAMText")
  if(storedText != null){
    document.querySelector("#elevenAM").value = storedText
  } else {
    document.querySelector("#elevenAM").value = ""
  }
}

function twelvePMGetValue() {
  var storedText = localStorage.getItem("twelvePMText")
  if(storedText != null){
    document.querySelector("#twelvePM").value = storedText
  } else {
    document.querySelector("#twelvePM").value = ""
  }
}

function onePMGetValue() {
  var storedText = localStorage.getItem("onePMText")
  if(storedText != null){
    document.querySelector("#onePM").value = storedText
  } else {
    document.querySelector("#onePM").value = ""
  }
}

function twoPMGetValue() {
  var storedText = localStorage.getItem("twoPMText")
  if(storedText != null){
    document.querySelector("#twoPM").value = storedText
  } else {
    document.querySelector("#twoPM").value = ""
  }
}

function threePMGetValue() {
  var storedText = localStorage.getItem("threePMText")
  if(storedText != null){
    document.querySelector("#threePM").value = storedText
  } else {
    document.querySelector("#threePM").value = ""
  }
}

function fourPMGetValue() {
  var storedText = localStorage.getItem("fourPMText")
  if(storedText != null){
    document.querySelector("#fourPM").value = storedText
  } else {
    document.querySelector("#fourPM").value = ""
  }
}

function fivePMGetValue() {
  var storedText = localStorage.getItem("fivePMText")
  if(storedText != null){
    document.querySelector("#fivePM").value = storedText
  } else {
    document.querySelector("#fivePM").value = ""
  }
}






// function to reload page every 5 minutes to recheck if task is late
setInterval(function () {
  var nineAMUpdate = $()
  location.reload();
}, (1000 * 60) * 5);


// var timeIndicator = function() {
//   // get date from task element
//   var descriptionEntered = $(".description").find("textarea").text().trim();
//   // to ensure it worked
//   console.log(descriptionEntered);

//   // // convert to moment object at 5:00pm
//   // var time = moment(date, "L").set("hour", 17);
//   // // this should print out an object for the value of the date variable, but at 5:00pm of that date
//   // console.log(time);

//   //  // remove any old classes from element
//   //  $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

//   //  // apply new class if task is near/over due date
//   //  if (moment().isAfter(time)) {
//   //    $(taskEl).addClass("list-group-item-danger");
//   //  }
//   //   else if (Math.abs(moment().diff(time, "days")) <= 2) {
//   //     $(taskEl).addClass("list-group-item-warning");
//   //   }
// };













nineAMGetValue()
tenAMGetValue()
elevenAMGetValue()
twelvePMGetValue()
onePMGetValue()
twoPMGetValue()
threePMGetValue()
fourPMGetValue()
fivePMGetValue()




