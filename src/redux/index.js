import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";

import ListReducer from "./reducers/ListReducer";
import GraphReducer from "./reducers/GraphReducer";

const rootReducer = combineReducers({
  list: ListReducer,
  graph: GraphReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
