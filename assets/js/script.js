var currentDayHeader = document.querySelector("#currentDay");
var currentTimeHeader = document.querySelector("#currentTime");
var today = moment(); 
var description = document.querySelector(".description")
console.log(today.format('H'))
var saveBtn = document.querySelector(".saveBtn")

$(currentDayHeader).text(today.format('dddd, MMMM Do, YYYY'));
$(currentTimeHeader).text(today.format('h:mm a'));

var currentTime = moment().format('h')

var nineAMTime = moment().set('hour', '9')
var tenAMTime = moment().set('hour', '10')
var elevenAMTime = moment().set('hour', '11')
var twelveAMTime = moment().set('hour', '12')
var onePMTime = moment().set('hour', '13')
var twoPMTime = moment().set('hour', '14')
var threePMTime = moment().set('hour', '15')
var fourPMTime = moment().set('hour', '16')
var fivePMTime = moment().set('hour', '17')


var tasks = {};


// 9 AM Save Button function
$(document).ready(function () {
  $("#nineAMSaveBtn").click(function() {
    // val() and trim() methods are used to get the values from
    // textarea and stored in ""Text variable
    var nineAMText = $("#nineAM").val().trim();
    // set the key/value pair in localStorage
    localStorage.setItem('nineAMText', nineAMText);
  })
});

// 10 AM Save Button function
$(document).ready(function () {
  $("#tenAMSaveBtn").click(function() {
    var tenAMText = $("#tenAM").val().trim();
    localStorage.setItem('tenAMText', tenAMText);
  })
});

// 11 AM Save Button function
$(document).ready(function () {
  $("#elevenAMSaveBtn").click(function() {
    var elevenAMText = $("#elevenAM").val().trim();
    localStorage.setItem('elevenAMText', elevenAMText);
  })
});

// 12 PM Save Button function
$(document).ready(function () {
  $("#twelvePMSaveBtn").click(function() {
    var twelvePMText = $("#twelvePM").val().trim();
    localStorage.setItem('twelvePMText', twelvePMText);
  })
});

// 1 PM Save Button function
$(document).ready(function () {
  $("#onePMSaveBtn").click(function() {
    var onePMText = $("#onePM").val().trim();
    localStorage.setItem('onePMText', onePMText);
  })
});

// 2 PM Save Button function
$(document).ready(function () {
  $("#twoPMSaveBtn").click(function() {
    var twoPMText = $("#twoPM").val().trim();
    localStorage.setItem('twoPMText', twoPMText);
  })
});

// 3 PM Save Button function
$(document).ready(function () {
  $("#threePMSaveBtn").click(function() {
    var threePMText = $("#threePM").val().trim();
    localStorage.setItem('threePMText', threePMText);
  })
});

// 4 PM Save Button function
$(document).ready(function () {
  $("#fourPMSaveBtn").click(function() {
    var fourPMText = $("#fourPM").val().trim();
    localStorage.setItem('fourPMText', fourPMText);
  })
});

// 5 PM Save Button function
$(document).ready(function () {
  $("#fivePMSaveBtn").click(function() {
    var fivePMText = $("#fivePM").val().trim();
    localStorage.setItem('fivePMText', fivePMText);
  })
});








// localStorage get values for each scheduled time textarea
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

// figur eout how to assign ucrrent hour to actual current hour

$(document).ready(function () {

  if (currentTime > nineAMTime ) {
    nineAM.classList.add("past")
  } else if (currentTime == nineAMTime) {
    nineAM.classList.add("present")
  } else {
    nineAM.classList.add("future")
  };

  if (currentTime > tenAMTime ) {
    tenAM.classList.add("past")
  } else if (currentTime == tenAMTime) {
    tenAM.classList.add("present")
  } else {
    tenAM.classList.add("future")
  };

  if (currentTime > elevenAMTime ) {
    elevenAM.classList.add("past")
  } else if (currentTime == elevenAMTime) {
    elevenAM.classList.add("present")
  } else {
    elevenAM.classList.add("future")
  };
});


// // function to reload page every 1 minute to recheck if task is late     x3
setInterval(function () {
  location.reload();
}, (1000 * 60) * 1);


// googl: jquery.attr method



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

// determine current hour and compare to hour in calendar





// $(document).ready(function () {
//   $(".saveBtn").click(function() {
//     // var nineAMText = $("#nineAM").val().trim();
//     // localStorage.setItem('nineAMText', nineAMText);
//     // console.log($(this).parent().parent().children()[1].textContent.trim())
//     console.log($(this).closest("textarea"))


  
//   })
// });






nineAMGetValue()
tenAMGetValue()
elevenAMGetValue()
twelvePMGetValue()
onePMGetValue()
twoPMGetValue()
threePMGetValue()
fourPMGetValue()
fivePMGetValue()




