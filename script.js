"use strict";

let  sceretnum = Math.trunc(Math.random() * 20) + 1;
let highscore=0;
let score = 20;

document.querySelector('.again').addEventListener("click" , function(){
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.number').style.width ='15rem';


    sceretnum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = '?';
    score=20;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector('.guess').value = '';

})

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = " 🚫 Not a number";
  } else if (score > 1) {
    if (guess == sceretnum) {
      document.querySelector(".message").textContent = "🎉 Correct Number";

      //styling after win 
      document.querySelector('.number').textContent = sceretnum ;

      document.querySelector('body').style.backgroundColor= '#60b347' ;

      document.querySelector('.number').style.width = '30rem'

      // updating highscore
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent= highscore ;
        }


    } else if (guess !== sceretnum) {
      if (guess > sceretnum) {
        document.querySelector(".message").textContent = "⬆️ Too high";
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess < sceretnum) {
        document.querySelector(".message").textContent = "⬇️ Too low";
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  } else {
    document.querySelector(".message").textContent = "😞 You lose the game... Tap Again to Play";
    document.querySelector(".score").textContent = "0";
  }
});
