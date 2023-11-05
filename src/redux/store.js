import { createStore } from 'redux';
import reducer from './auth/reducer';
const store = createStore(reducer);
export default store;
