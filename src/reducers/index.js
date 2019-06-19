import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { hierarchy } from './hierarchy';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  hierarchy
});

export default rootReducer;
