//-------------------------------------------------------- JS cho Mindmap
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


//-------------------------------------------------------- mapping on click
setTimeout(() => {
    const mappings = document.querySelectorAll('.mapping');

    mappings.forEach(mapping => {
        mapping.addEventListener('click', (event) => {
            findMapping(mapping);
        });
    });

    function findMapping(element) {
        let mappingId = element.textContent?.match(/\^(\d+)$/)[0];
        mappingId = mappingId.slice(1);
        const targetElement = document.getElementById(`match-${mappingId}`);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Không tìm thấy phần tử tương ứng');
        }
    }
}, 3000);

function mindmapShowHide() {
    const mindmap = document.getElementById('mindmap-canvas');
    mindmap.style.display = mindmap.style.display === 'none' ? 'block' : 'none';
}
function trackpadShowHide() {
    const trackpad = document.getElementById('control-panner');
    trackpad.style.display = trackpad.style.display === 'none' ? 'block' : 'none';
}