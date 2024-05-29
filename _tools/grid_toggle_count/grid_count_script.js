document.addEventListener('DOMContentLoaded', () => {
    const gridElement = document.getElementById('grid');
    const labelElement = document.getElementById('label');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const selectAllButton = document.getElementById('selectAll');
    const deselectAllButton = document.getElementById('deselectAll');

    let squares = [];
    const numberOfSquares = 16;

    function createGrid() {
        for (let i = 0; i < numberOfSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.index = i;
            square.addEventListener('click', toggleSquare);
            gridElement.appendChild(square);
            squares.push(square);
        }
        updateLabel();
    }

    function toggleSquare(event) {
        const index = parseInt(event.target.dataset.index);
        squares[index].classList.toggle('active');
        updateLabel();
    }

    function updateLabel() {
        const activeSquares = squares.filter(square => square.classList.contains('active')).length;
        labelElement.textContent = activeSquares;
    }

    increaseButton.addEventListener('click', () => {
        for (let square of squares) {
            if (!square.classList.contains('active')) {
                square.classList.add('active');
                updateLabel();
                break;
            }
        }
    });

    decreaseButton.addEventListener('click', () => {
        for (let square of squares.reverse()) {
            if (square.classList.contains('active')) {
                square.classList.remove('active');
                updateLabel();
                break;
            }
        }
        squares.reverse(); // Revert back to original order
    });

    selectAllButton.addEventListener('click', () => {
        squares.forEach(square => square.classList.add('active'));
        updateLabel();
    });

    deselectAllButton.addEventListener('click', () => {
        squares.forEach(square => square.classList.remove('active'));
        updateLabel();
    });

    createGrid();
});
