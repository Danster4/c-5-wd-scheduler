var currentDayHeader = document.querySelector("#currentDay");
var currentTimeHeader = document.querySelector("#currentTime");
var today = moment(); 
var description = document.querySelector(".description");

var deleteAllTasks = document.querySelector(".delete-all-tasks");
var saveBtn = document.querySelector(".saveBtn");

$(currentDayHeader).text(today.format('dddd, MMMM Do, YYYY'));
$(currentTimeHeader).text(today.format('h:mm a'));


var nineAMTime = moment().hours(9);
var tenAMTime = moment().hours(10);
var elevenAMTime = moment().hours(11);
var twelvePMTime = moment().hours(12);
var onePMTime = moment().hours(13);
var twoPMTime = moment().hours(14);
var threePMTime = moment().hours(15);
var fourPMTime = moment().hours(16);
var fivePMTime = moment().hours(17);
var sixPMTime = moment().hours(18);


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



var auditTime = function() {
   // Set nineAM color based on time of current day
   if (moment().isBetween(nineAMTime, tenAMTime)) {
    $("#nineAM").addClass("present");
  } else if (moment().isAfter(tenAMTime)) {
    $("#nineAM").addClass("past");
  } else {
    $("#nineAM").addClass("future");
  };

  if (moment().isBetween(tenAMTime, elevenAMTime)) {
    $("#tenAM").addClass("present");
  } else if (moment().isAfter(elevenAMTime)) {
    $("#tenAM").addClass("past");
  } else {
    $("#tenAM").addClass("future");
  };

  if (moment().isBetween(elevenAMTime, twelvePMTime)) {
    $("#elevenAM").addClass("present");
  } else if (moment().isAfter(twelvePMTime)) {
    $("#elevenAM").addClass("past");
  } else {
    $("#elevenAM").addClass("future");
  };

  if (moment().isBetween(twelvePMTime, onePMTime)) {
    $("#twelvePM").addClass("present");
  } else if (moment().isAfter(onePMTime)) {
    $("#twelvePM").addClass("past");
  } else {
    $("#twelvePM").addClass("future");
  };

  if (moment().isBetween(onePMTime, twoPMTime)) {
    $("#onePM").addClass("present");
  } else if (moment().isAfter(twoPMTime)) {
    $("#onePM").addClass("past");
  } else {
    $("#onePM").addClass("future");
  };

  if (moment().isBetween(twoPMTime, threePMTime)) {
    $("#twoPM").addClass("present");
  } else if (moment().isAfter(threePMTime)) {
    $("#twoPM").addClass("past");
  } else {
    $("#twoPM").addClass("future");
  };

  if (moment().isBetween(threePMTime, fourPMTime)) {
    $("#threePM").addClass("present");
  } else if (moment().isAfter(fourPMTime)) {
    $("#threePM").addClass("past");
  } else {
    $("#threePM").addClass("future");
  };

  if (moment().isBetween(fourPMTime, fivePMTime)) {
    $("#fourPM").addClass("present");
  } else if (moment().isAfter(fivePMTime)) {
    $("#fourPM").addClass("past");
  } else {
    $("#fourPM").addClass("future");
  };

  if (moment().isBetween(fivePMTime, sixPMTime)) {
    $("#fivePM").addClass("present");
  } else if (moment().isAfter(sixPMTime)) {
    $("#fivePM").addClass("past");
  } else {
    $("#fivePM").addClass("future");
  };
}


// function to reload page every 1 minute to recheck if task is late 
setInterval(function () {
  auditTime();
  location.reload();
}, (1000 * 60));


deleteAllTasks.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
  return;
})





nineAMGetValue()
tenAMGetValue()
elevenAMGetValue()
twelvePMGetValue()
onePMGetValue()
twoPMGetValue()
threePMGetValue()
fourPMGetValue()
fivePMGetValue()

auditTime();


