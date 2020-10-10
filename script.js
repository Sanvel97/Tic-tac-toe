// 'use strict'

let Player = "x";
let gameStatus = "Game On";
let holder = document.querySelector('.holder')
let boxes = document.getElementsByClassName("box");
let tab = document.querySelector('table')
let reset = document.querySelector('#reset')
start()

// game process

function start(){
  for(let i = 0; i <boxes.length; i++){
    boxes[i].style.animationDuration = '0.5s'
    boxes[i].style.animationName = 'lightbox'
  }
}


for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function() {
      if (boxes[i].innerHTML == "" && gameStatus == "Game On") {
        boxes[i].innerHTML = Player;
        if(boxes[i].innerHTML == 'x'){
        Player = 'o';
      }
      else{
        Player = 'x'
      }
        document.getElementById("player").innerHTML = Player.toUpperCase() + "'s turn";

            if (
              boxes[0].innerHTML == boxes[1].innerHTML &&
              boxes[1].innerHTML == boxes[2].innerHTML &&
              boxes[0].innerHTML != ""
            ) {
              theWinner(0, 1, 2);
            } else if (
              boxes[3].innerHTML == boxes[4].innerHTML &&
              boxes[4].innerHTML == boxes[5].innerHTML &&
              boxes[3].innerHTML != ""
            ) {
              theWinner(3, 4, 5);
            } else if (
              boxes[6].innerHTML == boxes[7].innerHTML &&
              boxes[7].innerHTML == boxes[8].innerHTML &&
              boxes[6].innerHTML != ""
            ) {
              theWinner(6, 7, 8);
            } else if (
              boxes[0].innerHTML == boxes[3].innerHTML &&
              boxes[3].innerHTML == boxes[6].innerHTML &&
              boxes[0].innerHTML != ""
            ) {
              theWinner(0, 3, 6);
            } else if (
              boxes[1].innerHTML == boxes[4].innerHTML &&
              boxes[4].innerHTML == boxes[7].innerHTML &&
              boxes[1].innerHTML != ""
            ) {
              theWinner(1, 4, 7);
            } else if (
              boxes[2].innerHTML == boxes[5].innerHTML &&
              boxes[5].innerHTML == boxes[8].innerHTML &&
              boxes[2].innerHTML != ""
            ) {
              theWinner(2, 5, 8);
            } else if (
              boxes[0].innerHTML == boxes[4].innerHTML &&
              boxes[4].innerHTML == boxes[8].innerHTML &&
              boxes[0].innerHTML != ""
            ) {
              theWinner(0, 4, 8);
            } else if (
              boxes[2].innerHTML == boxes[4].innerHTML &&
              boxes[4].innerHTML == boxes[6].innerHTML &&
              boxes[2].innerHTML != ""
            ) {
              theWinner(2, 4, 6);
            }
          }
        };
      }


// haghtoxi function

function theWinner(a,b,c){
  gameStatus = 'Game Over';
  document.getElementById('winner').innerHTML = Player;
  document.getElementById('message').style.display = 'block';
  tab.style.opacity = '0'
  tab.style.transitionDuration = '2s'
  tab.style.transitionDelay = '1s'
  boxes[a].style.color = 'red';
  boxes[b].style.color = 'red';
  boxes[c].style.color = 'red';
  document.getElementById("player").innerHTML = '';
}

// reset game

reset.onclick = function(){
  tab.style.opacity = '1'
  tab.style.transitionDuration = '2s'
  document.getElementById('message').style.display = 'none';
  for(let i = 0; i < boxes.length; i++){
    boxes[i].innerHTML = '';
    boxes[i].style.color = "black";
  }
gameStatus = "Game On";

start()
}
