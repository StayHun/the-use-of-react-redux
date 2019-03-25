import { combineReducers } from 'redux';

import another from './another';
import reducer from './reducer';

const all = combineReducers({
    an: another,
    re: reducer
});
export default all;

// export default combineReducers({
//   another,
//   reducer
// });