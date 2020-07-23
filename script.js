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

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", chill);
q1a2.addEventListener("click", straightforward);
q1a3.addEventListener("click", fun);
q1a4.addEventListener("click", kind);

q2a1.addEventListener("click", straightforward);
q2a2.addEventListener("click", kind);
q2a3.addEventListener("click", fun);
q2a4.addEventListener("click", chill);

q3a1.addEventListener("click", fun);
q3a2.addEventListener("click", kind);
q3a3.addEventListener("click", chill);
q3a4.addEventListener("click", straightforward);


//#TODO: Define quiz functions here
function fun() {
  funScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function kind() {
  kindScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function straightforward() {
  straightforwardScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function chill() {
  chillScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function updateResult() {
  if (score1 >= 2){
    result.innerHTML = “result1”;
  } else if (score2 >= 2){
    result.innerHTML = “result2”;
  } else if (score3 >= 2){
    result.innerHTML = “result3”;
  } else if (score4 >= 2){
    result.innerHTML = “result4”;
  } else {
    result.innerHTML = “you are a mix of results”;
  }
}

}