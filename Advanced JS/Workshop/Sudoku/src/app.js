// import { p1 } from './puzzles.js';
import { generateBoard, button } from './board.js';
import { init } from './import.js';
import { createTimer } from './timer.js';

// Load puzzle
// Generate DOM elements
// Check solution
// Configure input event listeners


window.addEventListener('DOMContentLoaded', start);

function start() {
    const panel = document.getElementById('panel');
    const main = document.querySelector('main');
    // const cells = generateBoard(p1, main);
    let cells = {
        blocks: [[]],
        rows: [[]],
        columns: [[]],
    };

    const checkBtn = document.getElementById('checkBtn');
    checkBtn.addEventListener('click', () => {
        const blocksReady = cells.blocks.every(check);
        const rowsReady = cells.rows.every(check);
        const colsReady = cells.columns.every(check);
        if (blocksReady && rowsReady && colsReady) {
            alert ('You win!');
            timer.pause();
        }
        checkBtn.replaceWith(uncheckBtn);
    });
    const uncheckBtn = button('Clear Check', () => {
        cells.blocks.forEach(c => c.forEach(x => x.classList.remove('error')));
        uncheckBtn.replaceWith(checkBtn);
    });

    const timer = createTimer();

    const pauseBtn = document.getElementById('pauseBtn');
    pauseBtn.addEventListener('click', () => {
        main.remove();
        timer.pause();
        pauseBtn.replaceWith(resumeBtn);
    });
    const resumeBtn = button('Resume', () => {
        panel.before(main);
        timer.resume();
        resumeBtn.replaceWith(pauseBtn);
    });

    init((puzzle) => {
        cells = generateBoard(puzzle, main);
        createTimer();
    });
}

function check(cells) {
    const numbers = new Set();

    for (let cell of cells) {
        if (cell.value != '') {
            numbers.add(cell.value);
        }
    }

    if (numbers.size == 9) {
        return true;
    } else {
        cells.forEach(c => c.classList.add('error'));
        return false;
    }
}
