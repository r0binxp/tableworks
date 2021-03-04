import {createStore} from "redux"


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
            access: [
                {location:"Argentina", date: 'December 25, 2020 23:15:30'},
                {location:"Peru", date: 'December 20, 2020 23:15:30'},
                {location:"Bolivia", date: 'October 15, 2020 23:15:30'},
        ]},
        {
            id: "3",
            firstName: "Maria Laura",
            LastName: "Adriani",
            email: "mladriani@gmail.com",
            dni: 5457123,
            creationDate: '10-05-2019',
            address: 'Puerto Mont 1540',
            access: [
                {location:"Argentina", date: 'December 25, 2020 23:15:30'},
                {location:"Peru", date: 'December 20, 2020 23:15:30'},
                {location:"Bolivia", date: 'October 15, 2020 23:15:30'},
        ]},
        {
            id: "4",
            firstName: "Xavier",
            LastName: "Pertuzi",
            email: "xavierphoto@gmail.com",
            dni: 25487523,
            creationDate: '05-01-2018',
            address: 'Zavalla 5010',
            access: [
                {location:"Argentina", date: 'December 25, 2020 23:15:30'},
                {location:"Peru", date: 'December 20, 2020 23:15:30'},
                {location:"Bolivia", date: 'October 15, 2020 23:15:30'},
        ]},
            
    ],
    columns: [
        {title: 'Name', field: 'firstName'},
        {title: 'LastName', field: 'LastName'},
        {title: 'E-mail', field: 'email'},
        {title: 'Dni', field: 'dni'},
        {title: 'Address', field: 'address'},
        {title: 'Creation Date', field: 'creationDate'},
    ],
    logged: false,
    selectedUser: "",
}


const reduceStore = (state = initialState, action) => {
    switch (action.type){
        case 'LOGGED':
            console.log("action en logged", action)
            return({
                ...state, 
                logged: action.payload
            })
        break;
        case 'DELETE_USER':
            console.log("DELETE", action)
            return({
                ...state, 
                users: state.users.filter(user => user.id !== action.payload)
            })
        break;
        case 'SELECTED_USER':
            console.log("SELECTED", action)
            return({
                ...state, 
                selectedUser: action.payload
            })
        break;
        case 'EDIT_USER':
            const updated = updateUser(state.users, action.payload)
            const newState = Object.assign(state.users, updated)
            return({
                ...state, 
                users: newState
            })
        break;
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
export default createStore(reduceStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())