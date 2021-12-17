
// // Timer function for Countdown
// const startingMinutes = 5;
// let timeLeft = startingMinutes * 60;
// const timerEl = document.getElementById('timer');
// setInterval (updateTimer, 1000);

// function updateTimer () {
//     if (timeLeft <= 0) {
//         timerEl.innerHTML = `0:00`
//         return
//         // if (lives < 0) {
//         //     return 'you win'
//         // } else {
//         //     return 'you lose'
//         // }
//     }
//     const minutes = Math.floor(timeLeft / 60);
//     let seconds = timeLeft % 60;
//     seconds = seconds < 10 ? '0' + seconds : seconds 
//     timerEl.innerHTML = `${minutes}:${seconds}`;
//     timeLeft--;
    
// }

// // lives and function for live decrease
// let lives = 5;
// const livesEl = document.getElementById('lives');
// const wallEl =  document.getElementById('wall');
// livesEl.innerHTML = `Lives Left ${lives}`;

// wallEl.addEventListener("click", function (e) {
//     e.preventDefault();
//     decreaseLives();
// })

// function decreaseLives () {
//     if (lives <= 0) {
//         livesEl.innerHTML = `Lives Left 0`
//         return
//     }
//     lives = lives - 1;
//     livesEl.innerHTML = `Lives Left ${lives}`;
// }

// // Creation of enemy characters
// // class Enemy {
// //     constructor(verticalPosition) {
// //         this.
// //     }
// // }
// SPAWN_RATE = 0.2
// function check_spawn(spawn_rate) {
//     return (Math.random() <= spawn_rate);
// }

// let lanesEl = document.querySelectorAll('.lane');
// setInterval (spawnEnemies, 1000);

// function spawnEnemies() {
//     lanesEl.forEach(lane => {
//         if (check_spawn(SPAWN_RATE)) {
//             let divEl = document.createElement("div");
//             divEl.classList.add('enemy');
//             lane.appendChild(divEl);
//         }
//     });
// }

//  let position = 0 

//  function moveEnemies() {

//  }
//  setInterval(function () {
//     // let enemiesEl = document.querySelectorAll('.enemy')

//     // enemiesEl.forEach(enemy => {
//     //     position += 5;
//     //     console.log(enemy.style);
//     //     console.log(enemy.style.right);
//     //     enemy.style.position = 'relative';

//     //     enemy.style.right = position + "px";
//     // })
//     let offset = $(".enemy").offset()
//     offset.right += 10 + "px";
//     $(".enemy").offset(offset)
    
//  }, 1000)

//  // onclick function to remove enemies
// Global Variables
const canvas = document.getElementById("#canvas1");
let ctx = canvas.getContext('2d');
canvas.height = 1200;
canvas.width = 1800;

// Creation of Gameboard


