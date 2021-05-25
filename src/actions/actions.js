// Types
import * as types from '../types/types'

export const setLogged = () => ({
    type: types.LOGGED,
    payload: true
})

export const deleteUser = (payload) => ({
    type: types.DELETE_USER,
    payload: payload
})

export const setSelectedId = (payload) => ({
    type: types.SELECTED_USER,
    payload: payload
})

export const editUser = (payload) => ({
    type: types.EDIT_USER,
    payload: payload
})

export const logOut = () => ({
    type: types.LOG_OUT,
    payload: false,
})