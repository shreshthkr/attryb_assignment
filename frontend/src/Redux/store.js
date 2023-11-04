import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import {reducer as inventoryReducer} from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    inventoryReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));