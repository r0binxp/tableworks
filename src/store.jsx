import {createStore} from "redux"
import { loadState, saveState } from "./localStorage"
import { throttle } from "lodash-es"

const initialState = {
    users: [
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
            
    ],
    
    logged: false,
    selectedUser: "",
}

const reduceStore = (state = initialState, action) => {
    switch (action.type){
        case 'LOGGED':
            return({
                ...state, 
                logged: action.payload
            });
        
        case 'DELETE_USER':
            return({
                ...state, 
                users: state.users.filter(user => user.id !== action.payload)
            });

        case 'SELECTED_USER':
            return({
                ...state, 
                selectedUser: action.payload
            });
        
        case 'EDIT_USER':
            const updated = updateUser(state.users, action.payload)
            const newState = Object.assign(state.users, updated)
            return({
                ...state, 
                users: newState
            });
        
        case 'LOG_OUT':
            return({
                ...state,
                logged: action.payload
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
