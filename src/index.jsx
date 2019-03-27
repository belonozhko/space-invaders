import { Bullet } from './js/bullet.jsx';
import { Enemy } from './js/enemy.jsx';

const makeBullet = new Bullet;
const makeEnemy = new Enemy;

var bullets = [];
var enemies = [];
var enemySpeed = 1;
var score = 0;
var level = 1;

function player(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.show = function(){
		ctx.fillStyle = "red";
		ctx.fillRect(this.x,this.y,this.w,this.h);
		if(this.x <= 0) this.x = 0;
		if(this.x >= canvas.width - this.w) this.x = canvas.width - this.w;
	}

	this.move = function(dir){
		this.clear();
		this.x += dir;
		this.show();
	}

	this.clear = function(){
		ctx.clearRect(this.x,this.y,this.w,this.h);

	}
}

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");


function game(){
    document.getElementById("play").style.visibility= "hidden";

    var playerOne = new player(canvas.width/2,canvas.height-20,20,20);

    function drawEnemies(yPos){
        for(var i = 0; i < 7; i++){
            var enemyOne = new enemy(i*80,20+yPos,20,20);
            enemies.push(enemyOne);
            enemies[i].show();
        }
    }

    

    // function update(){
    // 	playerOne.show();
    // 	document.getElementById("scoreText").innerHTML = score;

    // 	for(var i = 0; i < bullets.length; i++){
    // 		bullets[i].move();
    // 		for(var j = 0; j < enemies.length; j++){
    // 			if(bullets[i].hits(bullets[i],enemies[j])){
    // 			enemies[j].clear();
    // 			bullets[i].clear();
    // 			enemies.splice(j,1);
    // 			score += 100;
    // 			level++;	
    // 		}
    // 	}
    // 	if(bullets[i].y <= 0 ){ 
    // 		bullets[i].clear();
    // 		bullets.splice(i,1);
    // 	}
    // 	}
    // 	if(enemies.length <= 0){
    // 		drawEnemies(20);
    // 		enemySpeed += 1;
    // 	}
        
    // 	window.requestAnimationFrame(update);
    // }

    var enemyMove = setInterval(function(){
        for(var i = 0; i < enemies.length; i++){
            enemies[i].move(enemySpeed);
            if(enemies[i].y > 400){
                lost();
                clearInterval(enemyMove);
            }
        }
    },100);

    function lost(){
        setInterval(function(){
            ctx.fillStyle = "red";
            ctx.font = "80px Arial";
            ctx.fillText("GAME OVER",0,100);
            ctx.font = "24px Arial";
            ctx.fillText("Your Killed: " + level + " Enemies",0,200);
        },50);
    }

    window.addEventListener("keydown",function(e){
        if(e.keyCode == 37) {
            playerOne.move(-10);
        }
        if(e.keyCode == 39) {
            playerOne.move(10);
        }
        if(e.keyCode == 32){
            var bulletOne = new bullet(playerOne.x + 7, playerOne.y, 5, 5);
            bullets.push(bulletOne);
        }
    })
}

window.game = game;