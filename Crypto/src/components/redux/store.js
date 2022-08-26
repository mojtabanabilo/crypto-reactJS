import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import coinsReducer from "./coins/coinsReducer";
const store = createStore(coinsReducer, composeWithDevTools(applyMiddleware(thunk,logger)));
export default store;