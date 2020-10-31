import { combineReducers } from "redux";

import { personsReducer } from "./persons/persons.slice";
import { settingsReducer } from "./settings/settings.slice";

const reducers = combineReducers({
  persons: personsReducer,
  settings: settingsReducer,
});

export default reducers;
