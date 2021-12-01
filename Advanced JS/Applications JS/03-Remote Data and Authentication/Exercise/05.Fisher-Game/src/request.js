const host = 'http://localhost';
const port = 3030;

export async function request(url, options) {
    try {
        const response = await fetch(`${host}:${port}${url}`, options);
        if (response.ok != true) { throw new Error(`${response.status} ${response.statusText}`); }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error.message);
    }
}