//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var funScore = 0;
var kindScore = 0;
var straightforwardScore= 0;
var chillScore= 0;





//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");





//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", chill);
q1a2.addEventListener("click", straightforward);
q1a3.addEventListener("click", fun);
q1a4.addEventListener("click", kind);







//#TODO: Define quiz functions here
function fun() {
  funScore += 1;
  questionCount += 1;
}
function kind() {
  kindScore += 1;
  questionCount += 1;
}
function straightforward() {
  straightforwardScore += 1;
  questionCount += 1;
}
function chill() {
  chillScore += 1;
  questionCount += 1;
}