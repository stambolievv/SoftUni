export function generateBoard(values, main) {
    const clusters = values.map(cluster);

    const blocks = [...clusters[0].cells, ...clusters[1].cells, ...clusters[2].cells];
    const rows = [[], [], [], [], [], [], [], [], []];
    const columns = [[], [], [], [], [], [], [], [], []];

    for (let i = 0; i < 9; i++) {
        const colOffset = (i % 3) * 3;
        const rowOffset = Math.floor(i / 3) * 3;

        for (let j = 0; j < 9; j++) {
            const cell = blocks[i][j];
            
            const colIndex = colOffset +j - (Math.floor(j / 3) * 3);
            const rowIndex = rowOffset + Math.floor(j / 3);

            rows[rowIndex][colIndex] = cell;
            columns[colIndex][rowIndex] = cell;
        }
    }

    main.replaceChildren(
        clusters[0].element,
        clusters[1].element,
        clusters[2].element
    );

    return {
        blocks,
        rows,
        columns
    };
}


function cluster(values) {
    const blocks = values.map(block);
    return {
        cells: blocks.map(b => b.cells),
        element: e('div', { className: 'cluster' }, ...blocks.map(b => b.element))
    }
}

function block(values) {
    const element = e('div', { className: 'block' });

    const row1 = row(values.slice(0, 3));
    const row2 = row(values.slice(3, 6));
    const row3 = row(values.slice(6));

    element.appendChild(row1.element);
    element.appendChild(row2.element);
    element.appendChild(row3.element);

    return {
        cells: [...row1.cells, ...row2.cells, ...row3.cells],
        element
    };
}

function row(values) {
    const cells = values.map(cell);
    const element = e('div', { className: 'row' }, ...cells);
    return {
        cells,
        element
    }
}

function cell(value) {
    const element = e('input', { type: 'text', className: 'cell' });

    if (value > 0) {
        element.disabled = true;
        element.classList.add('fixed');
        element.value = value;
    } else {
        let currentValue = '';

        element.addEventListener('input', () => {
            const newValue = Number(element.value);
            if (element.value == '' || (element.value.length == 1 && newValue >= 1)) {
                currentValue = element.value;
            } else {
                element.value = currentValue;
            }
        });
    }

    return element;
}

export function e(type, attr, ...content) {
    const element = document.createElement(type);

    for (let prop in attr) {
        element[prop] = attr[prop];
    }
    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }

    return element;
}

export function button(label, callback) {
    const element = e('button', {}, label);
    element.addEventListener('click', callback);

    return element;
}