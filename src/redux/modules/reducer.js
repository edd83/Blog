import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {reducer as searchReducer} from 'redux-search';
import {routerReducer} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import multireducer from 'multireducer';
import {combineReducers} from 'redux';
import counter from './counter';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form,
  multireducer: multireducer({counter1: counter, counter2: counter, counter3: counter}),
  search: searchReducer
});
