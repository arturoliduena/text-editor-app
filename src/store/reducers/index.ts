import { combineReducers } from "redux";
import { textReducer } from "./text"
import { wordFindingReducer } from "./wordFinding"

export const rootReducer = combineReducers({ 
  text: textReducer,
  wordFinding: wordFindingReducer
});

export type AppState = ReturnType<typeof rootReducer>