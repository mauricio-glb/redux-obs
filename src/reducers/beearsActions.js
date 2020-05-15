export const FETCH_CULFILLED = 'FETCH_CULFILLED';
export const SET_STATUS = 'SET_STATUS';
export const FETCH_DATA = 'FETCH_DATA';
export const SEARCH = 'SEARCH';

export function fetchFullfilled(beers) {
    return {
        type: FETCH_CULFILLED,
        payload: beers
    }
}

export function setStatus(status) {
    return {
        type: SET_STATUS,
        payload: status
    }
}

export function fetchData() {
    return {
        type: FETCH_DATA
    }
}

export function search(input) {
    return {
        type: SEARCH,
        payload: input
    }
}