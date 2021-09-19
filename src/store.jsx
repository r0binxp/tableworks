// Redux
import {createStore} from "redux"

// LocalStorage
import { loadState, saveState } from "./localStorage/localStorage"

// Lodash-es
import { throttle } from "lodash-es"

// Types
import * as types from './types/types'

const usersData = [
    {
        id: "1",
        firstName: "Jose Luis",
        LastName: "Perez",
        email: "jlperez@gmail.com",
        dni: 28534292,
        creationDate: '20-12-2019',
        address: 'San Luis 2050',
        location: {
            lat: -32.94663832618656, 
            lng: -60.65214082839065,
        },
        access: [
            {location:"Argentina", date: 'December 25, 2020 23:15:30'},
            {location:"Peru", date: 'December 20, 2020 23:15:30'},
            {location:"Bolivia", date: 'October 15, 2020 23:15:30'},
    ]},
    {
        id: "2",
        firstName: "Raul",
        LastName: "Alderete",
        email: "raulhot99@gmail.com",
        dni: 25535222,
        creationDate: '15-08-2019',
        address: 'Dean Funes 985',
        location: {
            lat: -32.976097462171055,
            lng: -60.6438664135545,
        },
        access: [
            {location:"Chile", date: 'September 30, 2020 23:15:30'},
            {location:"Chile", date: 'September 20, 2020 23:15:30'},
            {location:"Chile", date: 'September 15, 2020 23:15:30'},
    ]},
    {
        id: "3",
        firstName: "Maria Laura",
        LastName: "Adriani",
        email: "mladriani@gmail.com",
        dni: 5457123,
        creationDate: '10-05-2019',
        address: 'Navarro 6224',
        location: {
            lat: -32.931310, 
            lng: -60.707500,
        },
        access: [
            {location:"Usa", date: 'December 25, 2020 23:15:30'},
            {location:"Chile", date: 'December 20, 2020 23:15:30'},
            {location:"Pery", date: 'October 15, 2020 23:15:30'},
    ]},
    {
        id: "4",
        firstName: "Xavier",
        LastName: "Pertuzi",
        email: "xavierphoto@gmail.com",
        dni: 25487523,
        creationDate: '05-01-2018',
        address: '1 de Mayo 1300',
        location: {
            lat: -32.95410626224765, 
            lng: -60.631345513554884,
        },
        access: [
            {location:"Argentina", date: 'December 25, 2020 23:15:30'},
            {location:"Peru", date: 'December 20, 2020 23:15:30'},
            {location:"Bolivia", date: 'October 15, 2020 23:15:30'},
    ]},

    {
        id: "5",
        firstName: "Juan",
        LastName: "Heredia",
        email: "juanheredia@gmail.com",
        dni: 34768943,
        creationDate: '09-12-2020',
        address: 'Av. Provincias Unidas 1303',
        location: {
            lat: -32.94334, 
            lng: -60.71243,
        },
        access: [
            {location:"Argentina", date: 'December 09, 2020 14:30:13'},
    ]},
    {
        id: "6",
        firstName: "Pamela",
        LastName: "Rodriguez",
        email: "pamrodriguez@gmail.com",
        dni: 20674896,
        creationDate: '15-05-2019',
        address: 'Pasco 1220',
        location: {
            lat: -32.95896, 
            lng: -60.64305,
        },
        access: [
            {location:"Argentina", date: 'May 15, 2019 16:15:13'},
            {location:"Argentina", date: 'December 18, 2019 12:17:00'}
    ]},
    {
        id: "7",
        firstName: "Agustina",
        LastName: "Tutolomondi",
        email: "agustt@gmail.com",
        dni: 47073787,
        creationDate: '26-09-2012',
        address: 'San Juan 4440',
        location: {
            lat: -32.94169, 
            lng: -60.68475,
        },
        access: [
            {location:"Argentina", date: 'September 25, 2012 23:15:13'},
            {location:"Chile", date: 'March 20, 2015 11:20:00'}

    ]},
    {
        id: "8",
        firstName: "Mateo",
        LastName: "Uliassi",
        email: "uliassiteo@gmail.com",
        dni: 31530687,
        creationDate: '02-10-2017',
        address: 'Juan José Paso 5030',
        location: {
            lat: -32.91950, 
            lng: -60.69410,
        },
        access: [
            {location:"Argentina", date: 'October 25, 2017 20:15:13'},
            {location:"Brazil", date: 'January 12, 2019 19:26:00'}

    ]},
]

const initialState = {
    users: usersData,
    logged: false,
    selectedUser: {},
}

const reduceStore = (state = initialState, action) => {
    switch (action.type){
        case types.LOGGED:
            return({
                ...state, 
                logged: action.payload,
                users: usersData,
            });
        
        case types.DELETE_USER:
            return({
                ...state, 
                users: state.users.filter(user => user.id !== action.payload)
            });

        case types.SELECTED_USER:
            return({
                ...state, 
                selectedUser: action.payload
            });
        
        case types.EDIT_USER:
            const updated = updateUser(state.users, action.payload)
            const newState = Object.assign(state.users, updated)
            return({
                ...state, 
                users: newState
            });
        
        case types.LOG_OUT:
            return({
                ...state,
                logged: action.payload,
                users: [],

            });
        
        default:
            return state
    }
}

const updateUser = (users, user) => {
    if (users && users.length) {
        users.map((c, i) => {
            if (c.id === user.id) {
                users[i] = user
                return
            }
        })
    }
    return users;
}

const persistedState = loadState()

export const store = createStore(reduceStore, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(throttle(() => {
    saveState( store.getState() )
}, 1000))
