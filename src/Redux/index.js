import { combineReducers } from "redux";
import InventoryReducers from "./ReduxReducers/InventoryReducers";
import UserReducers from "./ReduxReducers/UserReducers";

const reducers= combineReducers({
    inventory: InventoryReducers ,
    userReducer: UserReducers,
})

export default reducers;