import {createStore} from "redux"


const initialState = {
    users: [
        {
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
    logged: false,
    selectedUser: "",
    count: 0,
}


const reduceStore = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT':
            return({
                ...state, 
                count: state.count + 1
            })
        break;
        case 'DECREMENT':
            return({
                ...state, 
                count: state.count - 1
            })
        break;
        case 'LOGGED':
            console.log("action en logged", action)
            return({
                ...state, 
                logged: action.payload
            })
        break;
        default:
            return state
    }
}
export default createStore(reduceStore)