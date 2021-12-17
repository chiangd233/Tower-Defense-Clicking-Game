// Global Variables

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 900;
const cellSize = 50;
const cellGap = 15;
const gameGrid = [];
let enemies = [];
let enemyPosition = [];
let frame = 0;
let score = 0;

// Adding Images
let enemyImages = [];
let enemyImage = new Image();
enemyImage.src = '/game_images/ogre.png';
enemyImages.push(enemyImage);

let wallImages = [];
let wallImage = new Image();
wallImage.src = '/game_images/wall.png';
wallImages.push(wallImage);

let playerImages = [];
let playerImage = new Image();
playerImage.src = '/game_images/player.png';
playerImages.push(playerImage);

// Score Adding for each popped enemy
const scoreEl = document.getElementById('score');
scoreEl.innerHTML = `Score: ${score}`;

function increaseScore () {
    score = score + 1;
    scoreEl.innerHTML = `Score: ${score}`;
}

// Timer function for game

let startingMinutes = 5;
let timeLeft = startingMinutes * 60;
const timerEl = document.getElementById('timer');

updateTimer()
setInterval (updateTimer, 1000);

function updateTimer () {
    if (timeLeft <= 0) {
        timerEl.innerHTML = `0:00`
        return
    }
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds 
    timerEl.innerHTML = `${minutes}:${seconds}`;
    timeLeft--;

}

// lives and function for live decrease

let lives = 5;
const livesEl = document.getElementById('lives');
livesEl.innerHTML = `Lives Left ${lives}`;

function decreaseLives () {
    if (lives <= 0) {
        livesEl.innerHTML = `Lives Left 0`
        return
    }
    lives = lives - 1;
    livesEl.innerHTML = `Lives Left ${lives}`;
}

// Creation of Gameboard

const castleWall = {
    width: cellSize,
    height: canvas.height,
    img: wallImages[0]
}

// Player creation
const player = {
    x: 0,
    y: canvas.height / 2 - 25,
    width: cellSize,
    height: cellSize,
    img: playerImages[0]
}

class cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw () {
        ctx.fillStyle = '#9B7653';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function createGrid () {
    for (let y = 0; y < canvas.height; y += cellSize) {
        for (let x = cellSize; x < canvas.width; x += cellSize) {
            gameGrid.push(new cell(x, y));
        }
    }
}
createGrid ();

function drawGameGrid () {
    for (let i = 0; i < gameGrid.length; i++) {
        gameGrid[i].draw();
    }
}

// Mouse Movement for canvas

const mouse = {
    x: 0,
    y: 0,
    width: 1,
    height: 1,
}
let canvasPosition = canvas.getBoundingClientRect ();
canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.x - canvasPosition.left;
    mouse.y = e.y - canvasPosition.top;
})

// Enemy Killing Code
let enemyDiv = document.querySelector('canvas')
enemyDiv.addEventListener("click", function (e) {
    for (let i = 0; i < enemies.length; i++) {
        let buffer = 30;
        if (enemies[i].x - buffer <= mouse.x && mouse.x <= enemies[i].x + cellSize + buffer &&
            enemies[i].y - buffer <= mouse.y && mouse.y <= enemies[i].y + cellSize + buffer) {
                enemies.splice(i,1);
                increaseScore();
                return;
            }
    } 
} )


//Enemy Creation

let spawnRate = 0.5
class enemy {
    constructor(verticalPosition) {
        this.x = canvas.width;
        this.y = verticalPosition;
        this.width = cellSize;
        this.height = cellSize;
        this.speed = Math.random() + 3;
        this.image = enemyImages[0];
    }
    move () {
        this.x -= this.speed;
    }
    draw () {
        ctx.fillStyle = '#9B7653';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

function enemyMove () {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].move()
        enemies[i].draw()
        if (enemies[i].x < cellSize / 2) {
            enemies.splice(i,1)
            decreaseLives ()
        }
    }
    if (frame % 25 === 0){
        if(Math.random() <= spawnRate) {
            let verticalPosition = Math.floor(Math.random() * 12) * cellSize;
            enemies.push(new enemy(verticalPosition))
            enemyPosition.push(verticalPosition)
        }
    }
}

// Win Lose Conditions

function checkConditon () {
    if (lives === 0) {
            let loseEl = document.createElement('div');
            let loseBtn = document.createElement('button');
            popUp(loseEl);
            loseEl.style.backgroundColor = "red";
            loseEl.innerHTML = `<p>You Lose</br>Your Score: ${score}</p>`;
            retryBtn(loseBtn, loseEl);
            document.body.appendChild(loseBtn);
    } else if ( timerEl.innerHTML === `0:00` ) {
            let winEl = document.createElement('div');
            let winBtn = document.createElement('button');
            popUp(winEl);
            winEl.style.backgroundColor = "green";
            winEl.innerHTML = `<p>You Win</br>Your Score: ${score}</p>`;
            retryBtn(winBtn, winEl);
            document.body.appendChild(winBtn)
    } else {
        requestAnimationFrame(animate);
    }
}

function popUp(wL) {
    wL.style.height = '600px'
    wL.style.width = '900px'
    wL.style.position = 'absolute'
    wL.style.top = '50%'
    wL.style.left = '50%'
    wL.style.opacity = "0.5"
    wL.style.transform = "translate(-50%, -50%)"
    wL.style.fontSize = "50px"
    wL.style.textAlign = "center"
    document.body.appendChild(wL)
}

function retryBtn (retry, wL) {
    retry.innerHTML = 'Retry';
    retry.style.position = 'absolute'
    retry.style.top = '50%'
    retry.style.left = '50%'
    retry.style.transform = "translate(-50%, -50%)"
    retry.style.padding = "10px"
    retry.style.fontSize = "20px"
    retry.addEventListener("click", function (e) {
        e.preventDefault();
        restart (retry, wL);
    })
}

function restart (retry, wL) {
    enemies = [];
    enemyPosition = [];
    frame = 0;
    timeLeft = 300;
    lives = 5;
    livesEl.innerHTML = `Lives Left ${lives}`
    score = 0
    scoreEl.innerHTML = `Score: ${score}`
    animate ();
    wL.remove();
    retry.remove();
}


// Animate game
function animate () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawGameGrid();
    enemyMove();
    ctx.fillStyle = '#9B7653';
    ctx.fillRect(0, 0, castleWall.width, castleWall.height)
    ctx.drawImage(castleWall.img, -35, -50, castleWall.width + 70, castleWall.height + 100)
    ctx.drawImage(player.img, player.x, player.y, player.width, player.height)
    frame++;
    checkConditon();
}
animate ();
