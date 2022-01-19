async function getInfo() {
    const stopID = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const tableElement = document.getElementById('buses');

    try {
        stopName.textContent = 'Loading...';
        tableElement.replaceChildren();

        const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;
        const res = await fetch(url);
        if (res.status != 200) { throw new Error(`${res.status} ${res.statusText}`); }

        const data = await res.json();
        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(([id, min]) => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${id} arrives in ${min} minutes`;
            tableElement.appendChild(liElement);
        });
    } catch (err) {
        stopName.textContent = 'Error';
    }
}