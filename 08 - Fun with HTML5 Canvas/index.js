const canva = document.querySelector('#draw');
const ctx = canva.getContext('2d');

canva.width = window.innerWidth;
canva.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return; // Check if the mouse is down 

    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];

    // changes the color of the line
    if(hue>= 360) hue = 0 ;
    hue++

    // changes the width of the line
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction
    }

    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}

canva.addEventListener('mousemove', draw);
canva.addEventListener('mousedown',(e) => {
    isDrawing = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
});
canva.addEventListener('mouseup', () => isDrawing = false);
canva.addEventListener('mouseout', () => isDrawing = false);