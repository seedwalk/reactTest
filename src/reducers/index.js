import { combineReducers } from 'redux';

import clientesReducer from './clientes';

const appReducer = combineReducers({
    clientesReducer,
});

export default appReducer;