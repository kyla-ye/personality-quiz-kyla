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

//
var result = document.getElementById("result");

var restart = document.getElementById("restart");

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
function fun(){
  funScore += 1;
  questionCount += 1;
  if (questionCount == 3){
    updateResult();
  }
}
function kind(){
  kindScore += 1;
  questionCount += 1;
  if (questionCount == 3){
    updateResult();
  }
}
function straightforward(){
  straightforwardScore += 1;
  questionCount += 1;
  if (questionCount == 3){
    updateResult();
  }
}
function chill(){
  chillScore += 1;
  questionCount += 1;
  if (questionCount == 3){
    updateResult();
  }
}


function updateResult(){
  if (funScore >= 2){
    result.innerHTML = "You are FUN. The life of the party, you bring light to the places you go and smiles to the people you know. Just remember not to get too carried away, and stay safe and responsible:)";
  } 
  else if (kindScore >= 2){
    result.innerHTML = "You are KIND. Generous and compassionate, you are just full of goodness, and without people like you, the world would be hopeless. Just remember to take care of yourself too; you matter:)";
  } 
  else if (chillScore >= 2){
    result.innerHTML = "You are CHILL. Lowkey cute and funny, you are up-to-date on trends but mostly only bold around your friends. Just remember to be the true you too; you're great:)";
  } 
  else if (straightforwardScore >= 2){
    result.innerHTML = "You are STRAIGHTFORWARD. Headstrong and ambitious, you speak what's on your mind, and when it comes to food in your friend's teeth, you won't lie. Just remember to sometimes lose the battle and win the war:)";
  } 
  else{
    result.innerHTML = "There is a tie in your results. You are divergent. Restart?";
  }
}


q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function disableQ1(){
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}
function disableQ2(){
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}
function disableQ3(){
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

restart.addEventListener("click", restartQuiz);

function restartQuiz(){
  questionCount = 0;
  funScore = 0;
  kindScore = 0;
  straightforwardScore= 0;
  chillScore= 0;
  window.scrollTo(0, 0);
  enableQuestions();
}

function enableQuestions(){
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
}
