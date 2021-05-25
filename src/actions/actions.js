export const LOGGED = 'LOGGED';
export const DELETE_USER = 'DELETE_USER';
export const SELECTED_USER = 'SELECTED_USER';
export const EDIT_USER = 'EDIT_USER';
export const LOG_OUT = 'LOG_OUT'

export const setLogged = () => ({
    type: LOGGED,
    payload: true
})
export const deleteUser = (payload) => ({
    type: DELETE_USER,
    payload: payload
})
export const setSelectedId = (payload) => ({
    type: SELECTED_USER,
    payload: payload
})
export const editUser = (payload) => ({
    type: EDIT_USER,
    payload: payload
})
export const logOut = () => ({
    type: LOG_OUT,
    payload: false,
})