export class Player{

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");

        // var picPlayer = new Image();
        // picPlayer.src = 'img/ship.png'
    
        this.show = function () {
            // ctx.drawImage(picPlayer, this.x, this.y)
           
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y, this.w, this.h);
            if (this.x <= 0) this.x = 0;
            if (this.x >= canvas.width - this.w) this.x = canvas.width - this.w;
        }
    
        this.move = function (dir) {
            this.clear();
            this.x += dir;
            this.show();
        }
    
        this.clear = function () {
            ctx.clearRect(this.x, this.y, this.w, this.h);
    
        }
    }
}
