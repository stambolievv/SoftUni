function solve() {
    const label = document.querySelector('#info .info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    const stop = { name: 'Depot', next: 'depot' };

    async function depart() {
        departBtn.disabled = true;

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const res = await fetch(url);
        if (res.status != 200) { throw new Error(`${res.status} ${res.statusText}`); }

        Object.assign(stop, await res.json());

        label.textContent = `Next stop ${stop.name}`;

        arriveBtn.disabled = false;
    }

    function arrive() {
        arriveBtn.disabled = true;
        label.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
    }

    return { depart, arrive };
}

let result = solve();