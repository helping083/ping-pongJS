import { Paddle } from './paddle.js';
import { InputHandler } from './input.js';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight - 500;

let paddle= new Paddle(width, height , ctx)
ctx.clearRect(0, 0, width, height);
paddle.draw()
new InputHandler(paddle);


let lastime = 0;
function gameloop (timestamp) {
    let deltatTime = timestamp-lastime;
    lastime = timestamp;
    ctx.clearRect(0, 0, width, height);
    paddle.update(deltatTime);
    paddle.draw();
    requestAnimationFrame(gameloop);
}

gameloop();