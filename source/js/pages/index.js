const Mouse = require('../components/mouse');
const Ball = require('../components/ball');
    
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let pos = new Mouse(canvas);
let balls = [];

// create ball under mouse cursor
let mouse = new Ball(0, 0, 30, 'coral');

// create array of random positioned balls
for (let i = 0; i < 200; i++) {
    balls[i] = new Ball(
        Math.random() * 500,
        Math.random() * 500
    );
}

// render canvas
function render() {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    mouse.setPos(pos.x, pos.y);
    mouse.draw(ctx);

    balls.forEach(ball => {
        ball.think(mouse);
        ball.draw(ctx);
    });
}

render();