import { legacy_createStore, combineReducers } from "redux";
import { lengthReducer, timingReducer, clockReducer } from "./Reducers";

export type RootState = {
  lengthReducer: {
    break_len: number;
    session_len: number;
  };
  timingReducer: {
    min: number;
    sec: number;
  };
  clockReducer: {
    play: boolean;
    pause: boolean;
    reset: boolean;
  };
};

const rootReducer = combineReducers({
  lengthReducer,
  timingReducer,
  clockReducer,
});
const Store = legacy_createStore(rootReducer);

export default Store;
