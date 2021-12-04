import { combineReducers } from 'redux';

import global from './global';
import characters from './characters';

export default combineReducers({
	global,
	characters,
});
