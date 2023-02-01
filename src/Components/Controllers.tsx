import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { pausePlayClock, resetClock } from "../Actions/clockAction";
import { resetTime } from "../Actions/timingAction";
import { resetLengths } from "../Actions/lengthAction";

const Controllers = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetLengths());
    dispatch(resetTime());
    dispatch(resetClock());
  };

  return (
    <div id="buttons" className="sex">
      <button
        className="keys"
        id="start_stop"
        onClick={() => dispatch(pausePlayClock())}
      >
        <i className="fa fa-duotone fa-play"></i>
        <i className="fa fa-duotone fa-pause"></i>
      </button>
      <button className="keys" id="reset" onClick={handleReset}>
        <i className="fas fa fa-duotone fa-reply"></i>
      </button>
    </div>
  );
};

export default Controllers;
