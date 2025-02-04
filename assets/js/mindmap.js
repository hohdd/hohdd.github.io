const controlPanner = document.getElementById('control-panner');
const myPre = document.getElementById('mindmap-canvas');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let scale = 1;

function moveHandler(e) {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        myPre.style.left = x + 'px';
        myPre.style.top = y + 'px';
    }
}
function upHandler() {
    isDragging = false;

    // PC
    document.removeEventListener('mousemove', moveHandler);
    document.removeEventListener('mouseup', upHandler);
    // Mobile
    document.removeEventListener('touchmove', moveHandler);
    document.removeEventListener('touchend', upHandler);
}

controlPanner.addEventListener('wheel', (e) => {
    e.preventDefault();

    scale += e.deltaY * -0.001;
    scale = Math.max(0.1, Math.min(3, scale));

    myPre.style.transform = `scale(${scale})`;
});

// PC
controlPanner.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - myPre.offsetLeft;
    offsetY = e.clientY - myPre.offsetTop;

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', upHandler);
});
// MOBILE
controlPanner.addEventListener('touchstart', (e) => {
    isDragging = true;
    offsetX = e.clientX - myPre.offsetLeft;
    offsetY = e.clientY - myPre.offsetTop;

    // Mobile
    document.addEventListener('touchmove', moveHandler);
    document.addEventListener('touchend', upHandler);
});