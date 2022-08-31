import { createStore, combineReducers } from "redux";
import {studentReducer} from "./reducers/studentReducer";
import { bookingMovieReducer } from "./reducers/bookingMovieReducer";

const rootReducer = combineReducers({
    studentReducer: studentReducer,
    bookingMovieReducer: bookingMovieReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
