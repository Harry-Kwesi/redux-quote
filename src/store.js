import { createStore } from "redux";
import quoteReducer from "./reducer";

const store = createStore(quoteReducer);

export default store;
