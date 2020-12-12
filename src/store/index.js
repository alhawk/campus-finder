import {createStore, applyMiddleware, combineReducers} from "redux"
import campusReducer from "./reducers/campusReducer"
import thunk from "redux-thunk"

const reducers = combineReducers({
    campusReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
