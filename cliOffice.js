// var readlineSync = require("readline-sync");
// var firstName = readlineSync.question("First Name:");
// console.log("Hi" + firstName);
var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  first = { name: "roshan",
            scores: 5},
  second = { name: "kshitij",
            scores: 5}
] 

console.log("WELCOME!! to ofiice Quiz \n Select your options")

var questionsOfTheGame = [
 questionOne = {
    question: "What was the name of jim's wife ?\na)pam \nb)angela \nc)phyllis",
    answer: "a"
  },

  questionTwo = {
    question: "What was the name of thier own awards\na)dunder mufllin awards	\nb)micheal awards\nc)dundie awards",
    answer: "c"
 },

  questionThree  = {
    question: "what was the branch name? \na)florida	\nb)scranton\nc)california",
    answer: "b"
  },
  questionfour  = {
    question: "what was the name of jim and pam's first daughter?	\na)kelly \nb)cecce \nc)erin",
    answer: "b"
  },
 questionfive  = {
    question: "what was the name of micheal scott's wife ?\na)kelly \nb)jan \nc)holly",
    answer: "c"
  }
]
// console.log(questionsOfTheGame.length)

for(var i =0 ; i < questionsOfTheGame.length  ; i++ ){
  console.log(questionsOfTheGame[i].question)
  var ans = readlineSync.question("What is your answer?");
  if(ans.toUpperCase() === questionsOfTheGame[i].answer.toUpperCase()){
    console.log("YES!! you are right")
    score++
  }
  else
  {
    console.log("oops!! you were wrong, the correct answer was : "+ questionsOfTheGame[i].answer)
  }
  console.log("your current score is : "+score)
  console.log("\n------------------------------------")
}

console.log("HIGH SCORES \n"+ highScores[0].name+ " : "+highScores[0].scores )
console.log("\n"+highScores[1].name+ " : "+highScores[1].scores)
for(var i=0 ; i< highScores.length ; i++){
  if(score >= highScores[i].scores)
  {
    console.log( "yay! you have beaten the HIGHSCORES \n send us the screenshot \n THANKS for playing")
    break;
  }
}