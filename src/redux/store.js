import { createStore, combineReducers } from "redux";
import postReducer from "./reducers/postReducer";

const reducers = combineReducers({
	post: postReducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
