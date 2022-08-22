import { createStore, combineReducers } from "redux";
import {studentReducer} from "./reducers/studentReducer";

const rootReducer = combineReducers({
    studentReducer: studentReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
