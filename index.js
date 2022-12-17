var readLineSync = require('readline-sync');
var score = 0;

var highScore = [{
  name:"Prashant",
  score:5,
}];

var questions = [{
  question: "What is the name of Harry Potter's owl ? ",
  answer: "Hedwig",
},
{
  question: "What was the name of Lord Voldemort's loyal snake ? ",
  answer: "Nagini",
},
{
  question: "What position did Harry Potter play at Quidditch ? ",
  answer: "Seeker",
},
{
  question: "When was the first Harry Potter film released ? ",
  answer: "2001",
},
{
  question: "What spell would you use to light the tip of your wand ? ",
  answer: "Lumos",
}
              ]



function askQuestion(question, answer) {
  var userAnswer = readLineSync.question(question);
  var result = "";
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    result = "You are right!";

  }
  else {
    result = "You are wrong!";
  }

  console.log(result);
  console.log("Current Score ",score);
}


function welcome(){

  var userName = readLineSync.question("What is your name     ? ");
  
  console.log("Welcome ",userName);
  console.log("********************");
  console.log('Welcome to Harry Potter quiz ');
  console.log("********************");
}

function game(){
for(var i=0;i<questions.length;i++){
 
 askQuestion(questions[i].question,questions[i].answer);
 
  
}

}

function finalScore(){
console.log("--------------");
console.log("Final Score - ",score);
console.log("--------------");

}


welcome();
game();
finalScore();


