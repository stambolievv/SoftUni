const host = 'http://localhost';
const port = 3030;

async function request(url, method, data) {
    const options = {
        method,
        headers: {}
    };
    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${host}:${port}${url}`, options);
        if (response.ok != true) { throw new Error(`${response.status} ${response.statusText}`); }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error.message);
    }
}

async function readData() {
    return await request('/jsonstore/advanced/table', 'get');
}

export {
    readData
};