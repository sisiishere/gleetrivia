var array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(array);

var wins = 0;
console.log(wins);
var losses = 0;
console.log(losses);
var counter = 52000;
console.log(counter);

var reset = function() {
  document.getElementById("Wins:").innerHTML = wins;
  console.log(reset);

  document.getElementById("Losses:").innerHTML = losses;
  console.log(reset);

  document.getElementById("Clock").innerHTML = counter;
  console.log(reset);
};

var displayResults = function() {
  document.getElementById("Wins:").innerHTML = "Wins: " + wins;
  document.getElementById("Losses:").innerHTML = "Losses: " + losses;
  document.getElementById("Clock").innerHTML = "Clock " + counter;
};

var counter = 52;
var intervalID;
console.log(counter);

function start() {
  console.log("Starting ....");
  intervalID = setInterval(countDown, 1000);
}

function countDown() {
  // console.log("in countDown function");
  if (counter <= 0) {
    done();
    console.log("Times Up");
  } else {
    counter--;
    console.log("Counter: " + counter);
  }
}

function done() {
  clearInterval(intervalID);
  console.log("Interval Cleared");
}
$("#Clock").html(counter);

start();


$(".L").on("click", function() {
  console.log("CLicked");
  document.getElementsByClassName("L").innerHTML =
    "Glee!";
  losses++;
  displayResults();
});
 $("#Lopez").on("click", function() {
  console.log("CLicked");
  document.getElementById("Lopez").innerHTML =
    "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Hudson").on("click", function() {
  console.log("CLicked");
  document.getElementById("Hudson").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});

$("#Schuester").on("click", function() {
  console.log("CLicked");
  document.getElementById("Schuester").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Pillsbury").on("click", function() {
  console.log("CLicked");
  document.getElementById("Pillsbury").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Motta").on("click", function() {
  console.log("CLicked");
  document.getElementById("Motta").innerHTML = "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Pierce").on("click", function() {
  console.log("CLicked");
  document.getElementById("Pierce").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Fabray").on("click", function() {
  console.log("CLicked");
  document.getElementById("Fabray").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Jackson").on("click", function() {
  console.log("CLicked");
  document.getElementById("Jackson").innerHTML = "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Berry").on("click", function() {
  console.log("CLicked");
  document.getElementById("Berry").innerHTML = "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Anderson").on("click", function() {
  console.log("CLicked");
  document.getElementById("Anderson").innerHTML =
 "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Jones").on("click", function() {
  console.log("CLicked");
  document.getElementById("Jones").innerHTML =
    "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Chang").on("click", function() {
  console.log("CLicked");
  document.getElementById("Chang").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});

$("#Cohen-Chang").on("click", function() {
  console.log("CLicked");
  document.getElementById("Cohen-Chang").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Adams").on("click", function() {
  console.log("CLicked");
  document.getElementById("Adams").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Beiste").on("click", function() {
  console.log("CLicked");
  document.getElementById("Beiste").innerHTML = "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Sylvester").on("click", function() {
  console.log("CLicked");
  document.getElementById("Sylvester").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Washington").on("click", function() {
  console.log("CLicked");
  document.getElementById("Washington").innerHTML =
  "Don't stop believing!";
  wins++;
  displayResults();
});
$("#PincheQueen").on("click", function() {
  console.log("CLicked");
  document.getElementById("PincheQueen").innerHTML = "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Chord").on("click", function() {
  console.log("CLicked");
  document.getElementById("Chord").innerHTML = "Don't stop believing!";
  wins++;
  displayResults();
});
$("#Abrams").on("click", function() {
  console.log("CLicked");
  document.getElementById("Abrams").innerHTML =
 "Don't stop believing!";
  wins++;
  displayResults();
});
