import { TIMEOUT_SEC } from './config.js';

const timeout = timeout => {
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), timeout * 1000);
    return abortController;
};

const errorHandler = response => {
    if (!response.ok) throw new Error(response.status);
    return response;
}

export async function getJson(url) {
    try {
        return await fetch(url, {signal: timeout(TIMEOUT_SEC).signal})
            .then(response => errorHandler(response))
            .then(response => response.json());
    } catch(error) {
        throw error;
    }
}

