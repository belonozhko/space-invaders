import { Player } from "./player.jsx";

export class Bullet extends Player {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.show = function () {
            ctx.fillStyle = "blue";
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }

        this.move = function () {
            this.clear();
            this.y -= 5;
            this.show();
        }
        this.clear = function () {
            ctx.clearRect(this.x, this.y, this.w, this.h);
        }

        this.hits = function (bullet, enemy) {
            if (bullet.y < enemy.y + enemy.h + 10 && bullet.x < enemy.x + enemy.w && bullet.x > enemy.x - 3) {
                return (true);
            }
        }
    }
}