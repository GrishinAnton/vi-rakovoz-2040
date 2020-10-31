import { combineReducers } from "redux";

import { personsReducer } from "./persons/persons.slice";

const reducers = combineReducers({
  persons: personsReducer,
});

export default reducers;
