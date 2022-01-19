function solve() {
    const [_, sectionOpen, sectionInProgress, sectionComplete] = document.getElementsByTagName('section');
    document.querySelector('div.wrapper').addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target.tagName);
        console.log(e.target.id || e.target.className);
        if (e.target.tagName == 'BUTTON' && e.target.id == 'add') {
            const task = document.getElementById('task');
            const description = document.getElementById('description');
            const date = document.getElementById('date');
            if (task.value && description.value && date.value) {
                const article = elem('article', {},
                    elem('h3', {}, task.value),
                    elem('p', {}, `Description: ${description.value}`),
                    elem('p', {}, `Due Date: ${date.value}`),
                    elem('div', { className: 'flex' },
                        elem('button', { className: 'green' }, 'Start'),
                        elem('button', { className: 'red' }, 'Delete')
                    )
                );
                sectionOpen.lastElementChild.appendChild(article);
                task.value = '';
                description.value = '';
                date.value = '';
            }
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'green') {
            const clickedArticle = sectionOpen.lastElementChild.lastElementChild;
            const [leftButton, rightButton] = Array.from(clickedArticle.lastElementChild.children);
            leftButton.setAttribute('class', 'red');
            leftButton.textContent = 'Delete';
            rightButton.setAttribute('class', 'orange');
            rightButton.textContent = 'Finish';
            sectionInProgress.lastElementChild.appendChild(clickedArticle);
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'orange') {
            const clickedArticle = sectionInProgress.lastElementChild.lastElementChild;
            clickedArticle.lastElementChild.remove();
            sectionComplete.lastElementChild.appendChild(clickedArticle);
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'red') {
            e.target.parentElement.parentElement.remove();
        }
    });
    function elem(type, props, ...content) {
        const element = document.createElement(type);
        for (const prop in props) {
            element[prop] = props[prop];
        }
        for (let entry of content) {
            if (typeof entry == 'string' || typeof entry == 'number') {
                entry = document.createTextNode(entry);
            }
            element.appendChild(entry);
        }
        return element;
    }
}