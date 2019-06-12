export class InputHandler {
    constructor(paddle) {
        document.addEventListener('keydown', (e)=>{
            switch(e.keyCode) {
                case 39:
                  alert('right')
                break;
                case 37:
                    paddle.moveLeft();
                break;
            }
        });
    }
}