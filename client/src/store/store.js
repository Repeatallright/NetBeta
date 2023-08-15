import {createStore, combineReducers, applyMiddleware} from 'redux';
import { storeReducer } from './storageApp';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    store: storeReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))