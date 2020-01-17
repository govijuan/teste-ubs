import populatorReducer from './populator';
import {combineReducers} from 'redux';

const allReducers = combineReducers({ populateData: populatorReducer});

export default allReducers;