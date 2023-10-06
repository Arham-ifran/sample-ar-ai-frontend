import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/index";
import { errorMiddleware } from "./redux/error404";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk, errorMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
