const host = 'http://localhost';
const port = 3030;

export async function request(url, options) {
    try {
        const response = await fetch(`${host}:${port}${url}`, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status == 204 ? response : await response.json();

    } catch (error) {
        throw error;
    }
}