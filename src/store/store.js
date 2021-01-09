// стор всего приложения
import { combineReducers, createStore } from "redux";
import { customersReducer } from "./models/customers/reducer";

const rootReducer = combineReducers({
    customers: customersReducer,
    /// ...другие слайсы стора, чтобы каждая модель отвечала за свой кусок данных
});



export const rootStore = createStore(rootReducer, {});
