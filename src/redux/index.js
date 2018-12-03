import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";

import ListReducer from "./reducers/ListReducer";

const rootReducer = combineReducers({
  list: ListReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
