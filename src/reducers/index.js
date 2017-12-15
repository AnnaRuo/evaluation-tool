// import currentUser from './currentUser'
// import batches from './batches'
//
//
//
// export default {
//
//   currentUser,
//   batches,
// }


import {combineReducers} from 'redux';
import BatchReducer from './reducer-batches';

const allReducers = combineReducers({
  batches: BatchReducer
});

export default allReducers
