import { Player } from "./player.jsx";

export class Enemy extends Player{

    constructor(x,y,w,h){
        super(x, y, w, h)

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 50;

        var picEnemy = new Image();
        picEnemy.src = 'img/enemy.png'

        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");

        this.show = function(){
            // if ()
            // ctx.drawImage(picEnemy, this.x, this.y)

            ctx.fillStyle = "yellow";
            ctx.fillRect(this.x,this.y,this.w,this.h);
        }

        this.move = function(speed){
            this.clear();
            this.y += speed;
            this.show();	
        }

        this.clear = function(){
            // ctx.removeImage(picEnemy, this.x, this.y)
            ctx.clearRect(this.x,this.y,this.w,this.h);
        }
    }
}
