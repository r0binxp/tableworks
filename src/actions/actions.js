export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const LOGGED = 'LOGGED';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
})

export const setLogged = () => ({
    type: LOGGED,
    payload: true
})