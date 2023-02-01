import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { RootState } from "../Store";
import {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
} from "../Actions/lengthAction";
import { setTime } from "../Actions/timingAction";

const Options = () => {
  const dispatch = useDispatch();

  const { break_len, session_len } = useSelector(
    (state: RootState) => state.lengthReducer
  );
  const { play, pause, reset } = useSelector(
    (state: RootState) => state.clockReducer
  );

  return (
    <div id="options" className="sex">
      <div id="break-label" className="opt">
        {/* break section  */}
        <header>Break Length</header>
        <div className="changers">
          <button
            id="break-increment"
            onClick={() => {
              if (pause) dispatch(incrementBreak());
            }}
          >
            <i className="fas fa fa-solid fa-arrow-up secIcon"></i>
          </button>
          <span id="break-length" className="length">
            {break_len}
          </span>
          <button
            id="break-decrement"
            onClick={() => {
              if (pause) dispatch(decrementBreak());
            }}
          >
            <i className="fas fa fa-solid fa-arrow-down secIcon"></i>
          </button>
        </div>
      </div>

      {/* session section  */}
      <div id="session-label" className="opt">
        <header>Session Length</header>
        <div className="changers">
          <button
            id="session-increment"
            onClick={() => {
              if (pause) {
                dispatch(incrementSession());
                dispatch(setTime(session_len + 1, 0));
              }
            }}
          >
            <i className="fas fa fa-solid fa-arrow-up secIcon"></i>
          </button>
          <span id="session-length" className="length">
            {session_len}
          </span>
          <button
            id="session-decrement"
            onClick={() => {
              if (pause) {
                dispatch(decrementSession());
                dispatch(setTime(session_len - 1, 0));
              }
            }}
          >
            <i className="fas fa fa-solid fa-arrow-down secIcon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
