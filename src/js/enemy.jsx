export class Enemy{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 50;
        this.show = function(){
            ctx.fillStyle = "yellow";
            ctx.fillRect(this.x,this.y,this.w,this.h);
        }
        this.move = function(speed){
            this.clear();
            this.y += speed;
            this.show();	
        }
        this.clear = function(){
            ctx.clearRect(this.x,this.y,this.w,this.h);
        }
    }
}
