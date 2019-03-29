import {Bullet} from './js/bullet.jsx';
import {Enemy} from './js/enemy.jsx';
import {Player} from './js/player.jsx'



function game() {
    document.getElementById("play").style.visibility = "hidden";

    var canvas = document.getElementById("mainCanvas");

    var playerOne = new Player(canvas.width /2, canvas.height -20, 20, 20);
    var bullets = [];
    var enemies = [];
    var enemySpeed = 1; 
    var score = 0;
    var level = 1;
    
    function drawEnemies(yPos) {
        for (var i = 0; i < 7; i++) {
            var enemyOne = new Enemy(i * 80, 20 + yPos, 20, 20);
            enemies.push(enemyOne);
            enemies[i].show();
        }
    }

    function update() {
        playerOne.show();
        document.getElementById("scoreText").innerHTML = score;

        for (var i = 0; i < bullets.length; i++) {
            bullets[i].move();
            for (var j = 0; j < enemies.length; j++) {
                if (bullets[i].hits(bullets[i], enemies[j])) {
                    enemies[j].clear();
                    bullets[i].clear();
                    enemies.splice(j, 1);
                    score += 100;
                    level++;
                }
            }
            if (bullets[i].y <= 0) {
                bullets[i].clear();
                bullets.splice(i, 1);
            }
        }

        if (enemies.length <= 0) {
            drawEnemies(20);
            enemySpeed += 1;
        }

        window.requestAnimationFrame(update);
    }

    var enemyMove = setInterval(function () {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].move(enemySpeed);
            if (enemies[i].y > 400) {
                lost();
                clearInterval(enemyMove);
            }
        }
    }, 100);

    function lost() {
        setInterval(function () {
            ctx.fillStyle = "red";
            ctx.font = "80px Fjalla One";
            ctx.fillText("GAME OVER", 0, 100);
            ctx.font = "24px Fjalla One";
            ctx.fillText("Your Score Was: " + score, 0, 150);
            ctx.font = "24px Fjalla One";
            ctx.fillText("Your Killed: " + level + " Enemies", 0, 200);
        }, 50);
    }

    
    window.addEventListener("keydown", function (event) {
        if (event.keyCode == 37) {
            playerOne.move(-10);
        }
        if (event.keyCode == 39) {
            playerOne.move(10);
        }
        if (event.keyCode == 32) {
            var bulletOne = new Bullet(playerOne.x + 7, playerOne.y, 5, 5);
            bullets.push(bulletOne);
        }
    });

    update();
}

window.game = game;