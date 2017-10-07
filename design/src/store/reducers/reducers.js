import ActionTypes from '../actions/actionTypes'

const initialState = {};

export function AppReducers(state = initialState, action){
    switch(action.type){
        case ActionTypes.LOGINREQUESTSUCCESS: {
            var newState = Object.assign({}, state, {login: action.data})
            state = newState;
            return state;
        }
        case ActionTypes.SIGNUPREQUESTSUCCESS: {
            var newState = Object.assign({}, state, {signup: action.data})
            state = newState;
            return state;
        }
        case ActionTypes.ADDREQUESTSUCCESS: {
            var newState = Object.assign({}, state, {addItem: action.data})
            state = newState;
            return state;
        }
        case ActionTypes.VIEWREQUESTSUCCESS: {
            var newState = Object.assign({}, state, {viewItem: action.data})
            state = newState;
            return state;
        }
        case ActionTypes.SEARCHREQUESTSUCCESS: {
            var newState = Object.assign({}, state, {searchItem: action.data})
            state = newState;
            return state;
        }
        default: 
            return state
    }
}
