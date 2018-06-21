import {createStore, applyMiddleware} from 'redux';
import Immutable from 'immutable';
import rootReducer from '../reducers/root_reducer';
import {LOGGER} from '../middlewares/logger';
import thunk from 'redux-thunk';

const initialState = Immutable.Map();

export default createStore(
    rootReducer, 
    initialState,
    applyMiddleware(LOGGER, thunk)
);