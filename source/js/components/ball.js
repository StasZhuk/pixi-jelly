function Ball(x, y, radius, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = radius || 2;
    this.color = color || '#5duw61';
    this.friction = 0.9;
    
    this.draw = (ctx) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };

    this.setPos = (x, y) => {
        this.x = x;
        this.y = y;
    };

    this.think = (mouse) => {
        // distance form mouse to this ball
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let dist = Math.sqrt(dx*dx + dy*dy);


        // if small ball and mouse ball connect
        if (dist <= mouse.radius) {
            console.log(dist);
            let angle = Math.atan2(dy,dx);
            let tx = mouse.x + Math.cos(angle) * 30;    
            let ty = mouse.y + Math.sin(angle) * 30;  
            
            this.vx += tx - this.x;
            this.vy += ty - this.y;

            console.log(this.vx);
        }

        // friction
        this.vx *= this.friction;
        this.vy *= this.friction;

        // move ball
        this.x += this.vx;
        this.y += this.vy;
    };
}

module.exports = Ball;