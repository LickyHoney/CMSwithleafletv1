import { createStore,compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk';
/*export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);

//export default store;