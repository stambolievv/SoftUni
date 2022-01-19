function attachEvents() {
    document.getElementById('submit').addEventListener('click', async () => {
        const name = document.getElementById('location').value;
        const { current, upcoming } = await getForecaster(name);

        document.getElementById('forecast').style.display = 'block';

        displayWeather(current, upcoming);
    });
}

function displayWeather(current, upcoming) {
    const currentWeather = document.getElementById('current');
    const upcomingWeather = document.getElementById('upcoming');
    try {
        // cleaning old data
        clearData(currentWeather, 'label');
        clearData(upcomingWeather, 'label');

        // current weather
        const { forecast: { condition, high, low }, name } = current;
        const divCurrent = elem('div', { className: 'forecasts' },
            elem('span', { className: 'condition symbol' }, symbol(condition)),
            elem('span', { className: 'condition' },
                elem('span', { className: 'forecast-data' }, name),
                elem('span', { className: 'forecast-data' }, `${low}°/${high}°`),
                elem('span', { className: 'forecast-data' }, condition)
            )
        );
        currentWeather.appendChild(divCurrent);

        // upcoming weather
        const divUpcoming = elem('div', { className: 'forecast-info' });
        upcoming.forecast.forEach(({ condition, high, low }) => {
            divUpcoming.appendChild(elem('span', { className: 'upcoming' },
                elem('span', { className: 'symbol' }, symbol(condition)),
                elem('span', { className: 'forecast-data' }, `${low}°/${high}°`),
                elem('span', { className: 'forecast-data' }, condition)
            ));
        });
        upcomingWeather.appendChild(divUpcoming);
    } catch (err) {
        const errCurrent = elem('div', { className: 'forecasts' }, '⚠ Error! ⚠');
        const errUpcoming = elem('div', { className: 'forecasts' }, 'Invalid input!');
        currentWeather.appendChild(errCurrent);
        upcomingWeather.appendChild(errUpcoming);
    }
}

async function getForecaster(name) {
    const code = await getCode(name);
    const [current, upcoming] = await Promise.all([
        getLocation('today', code),
        getLocation('upcoming', code)
    ]);
    return { current, upcoming };
}

async function getCode(name) {
    try {
        const url = 'http://localhost:3030/jsonstore/forecaster/locations';
        const res = await fetch(url);
        if (res.status != 200) { throw new Error(`Code: ${res.status} ${res.statusText}`); }

        const data = await res.json();

        const location = data.find(l => l.name == name);
        return location.code;
    } catch (err) {
        console.error(err.message);
    }
}

async function getLocation(day, code) {
    try {
        const url = `http://localhost:3030/jsonstore/forecaster/${day}/${code}`;
        const res = await fetch(url);
        if (res.status != 200) { throw new Error(`Location: ${res.status} ${res.statusText}`); }

        return await res.json();
    } catch (err) {
        console.error(err.message);
    }
}

function clearData(element, className) {
    while (element.lastChild.className != className) {
        element.removeChild(element.lastChild);
    }
}

function symbol(s) {
    const weather = {
        'Sunny': () => '☀',
        'Partly sunny': () => '⛅',
        'Overcast': () => '☁',
        'Rain': () => '☂'
    };
    return weather[s]();
}

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
attachEvents();
