export class Paddle{
    constructor(gameWidth, gameHeight, ctx) {
        this.width = 50;
        this.height = 2;
        this.speed = 0;
        this.maxSpeed = 1;
        this.ctx = ctx
        this.position = {
            x: gameWidth / 10 - this.width / 10,
            y: gameHeight - this.height - 40
        }
    }
    draw() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update = (deltaTime) => {
        //if delta time === 0;
        if( !deltaTime) return; 
        //else
        this.position.x += this.speed;
    }

    moveLeft = () => {
        this.speed = -this.maxSpeed
    }
    stop = () => {
        
    }
}