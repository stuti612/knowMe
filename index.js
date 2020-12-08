var readlinesync=require('readline-sync');
var userName=readlinesync.question("Enter your name: ");
console.log("WELCOME "+ userName +" TO - DO YOU KNOW STUTI?");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var score=0;
function play(question,answer){
  var userAnswer=readlinesync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("CORRECT!");
    score++;
  } else{
    console.log("OOPS!");
  }
  console.log("Current Score: "+score);
  console.log("-----------------------------");
}

var questions=[
  {
    ques:"Where do I live?\na.Bangalore\nb.Ranchi\nc.Nagpur\n", 
    ans:"b"
  },
  {
    ques:"My favourite food?\na.Pizza\nb.Pasta\nc.Burger\n", 
    ans:"a"
  },
  {
    ques:"My nickname?\na.Mili\nb.Stu\nc.Stuti\n", 
    ans:"a"
  },
  {
    ques:"My age?\na.18\nb.19\nc.20\n", 
    ans:"b"
  },
  {
    ques:"Where am I currently studying?\na.Chennai\nb.Ranchi\nc.Bangalore\n", 
    ans:"c"
  }
];
for(var i=0;i<questions.length;i++){
  var currentquestion1=questions[i];
  play(currentquestion1.ques,currentquestion1.ans);
}

var highScore=4;
console.log("Total Score = "+score);
if(score>highScore){
  console.log("CONGRATULATIONS! YOU HAVE SET A NEW HIGHSCORE = "+ score +"(send a screenshot to your friend!)");
} else {
  console.log("YOU GOT TO KNOW HER BETTER!...BETTER LUCK NEXT TIME");
}