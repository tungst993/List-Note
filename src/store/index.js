import { createStore, combineReducers } from 'redux';
import mangReducer from '../redux/mangReducer';
import isAddingReducer from '../redux/isAddingReducer';



const reducers = combineReducers({
      mangReducer,
      isAddingReducer
});

export default createStore(reducers);
 