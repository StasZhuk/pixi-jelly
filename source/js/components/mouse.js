function Mouse(canvas) {
    // default position
    this.x = 0;
    this.y = 0;

    // take new x,y coordinats on cursore move
    canvas.onmousemove = e => {
        // get cancas params
        const rect = canvas.getBoundingClientRect();
 
        // calc position mouse in canvas world
        this.x = e.clientX - rect.left;
        this.y = e.clientY - rect. top;
    }
}

module.exports = Mouse;
