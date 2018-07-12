window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.lineTo(50, 50);
    ctx.lineTo(50, 250);
    ctx.strokeStyle = '#000';
    ctx.stroke();
});