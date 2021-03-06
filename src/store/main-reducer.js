import { combineReducers } from 'redux';
import { fieldReducer } from './features/fields/fields-reducer';
import { occupationReducer } from './features/occupations/occupations-reducer';
import { specialisationReducer } from './features/specialisations/specialisations-reducer';
import { userReducer } from './features/users/users-reducer';

const mainReducer = combineReducers({
  usersStore: userReducer,
  fieldsStore: fieldReducer,
  specialisationsStore: specialisationReducer,
  occupationsStore: occupationReducer,
});

export default mainReducer;
