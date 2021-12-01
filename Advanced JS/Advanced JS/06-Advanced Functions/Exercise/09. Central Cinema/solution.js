function solve() {
    //Movie info
    const [movieName, hallName, ticketPrice] = document.querySelectorAll('#container input');
    //Add movie button
    document.querySelector('#container button').addEventListener('click', addMovie);
    //Clear archive button
    document.querySelector('#archive button').addEventListener('click', (e) => e.target.parentNode.children[1].textContent = '');
    //onScreen and archive text area
    const moviesSection = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul');

    function addMovie(e) {
        e.preventDefault();
        if (movieName.value != '' && hallName.value != '' && ticketPrice.value != '' && !isNaN(Number(ticketPrice.value))) {
            const li = document.createElement('li');
            // const htmlText = `
            // <span>${movieName.value}</span>
            // <strong>Hall: ${hallName.value}</strong>
            // <div>
            //     <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
            //     <input placeholder="Tickets Sold"></input>
            //     <button>Archive</button>
            // </div>`;
            // li.insertAdjacentHTML('afterbegin', htmlText);
            li.innerHTML = `
            <span>${movieName.value}</span>
            <strong>Hall: ${hallName.value}</strong>
            <div>
                <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                <input placeholder="Tickets Sold"></input>
                <button>Archive</button>
            </div>`;
            moviesSection.appendChild(li);

            movieName.value = '';
            hallName.value = '';
            ticketPrice.value = '';

            li.lastChild.lastElementChild.addEventListener('click', addToArchive);
        }
    }
    function addToArchive(e) {
        const current = e.target.parentNode;
        const name = current.parentNode.children[0];
        const price = current.children[0].textContent;
        const sold = current.children[1].value;
        if (sold != '' && !isNaN(Number(sold))) {
            current.parentNode.remove();
            const li = document.createElement('li');
            // const htmlText = `
            // <span>${name.textContent}</span>
            // <strong>Total amount: ${(sold * Number(price)).toFixed(2)}</strong>
            // <button>Delete</button>`;
            // li.insertAdjacentHTML('afterbegin', htmlText);
            li.innerHTML = `
            <span>${name.textContent}</span>
            <strong>Total amount: ${(sold * Number(price)).toFixed(2)}</strong>
            <button>Delete</button>`;
            archiveSection.appendChild(li);

            li.lastElementChild.addEventListener('click', (e) => e.target.parentNode.remove());
        }
    }
}