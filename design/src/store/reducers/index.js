import { combineReducers } from 'redux'
import { AppReducers } from './reducers'

var rootReducer = combineReducers({
    app: AppReducers
})

export default rootReducer;