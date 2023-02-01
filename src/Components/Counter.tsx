import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store";

const Counter = () => {
  const dispatch = useDispatch();

  const { min, sec } = useSelector((state: RootState) => state.timingReducer);
  const { play, pause, reset } = useSelector(
    (state: RootState) => state.clockReducer
  );
  const { break_len, session_len } = useSelector(
    (state: RootState) => state.lengthReducer
  );

  const [minute, setMinute] = useState<number>(min);
  const [second, setSecond] = useState<number>(sec);
  const [text, setText] = useState<string>("Session");
  const [Re, setRe] = useState<number>(1);

  const counter = useRef<HTMLDivElement>(null);
  const sound = useRef<HTMLAudioElement>(null);

  useLayoutEffect(() => {
    setMinute(min);
    setSecond(sec);
    if (reset) {
      sound.current?.pause();
      sound.current!.currentTime = 0;
    }
  }, [min, sec, reset]);

  useEffect(() => {
    let runTime: number;
    if (play && !pause) {
      //run the case if the time is completely over
      if (minute <= 0 && second <= 0) {
        //set the Clock new length to BreakLength and SessionLength alternatively
        sound.current?.play();
        setRe(Re + 1);
        if (Re >= 1 && Re % 2 == 1) {
          setMinute(break_len);
          setText("Break");
        } else if (Re >= 1 && Re % 2 == 0) {
          setMinute(session_len);
          setText("Session");
        }
      } else {
        //set the loop(conter)
        runTime = setTimeout(() => {
          setSecond(second - 1);
          if (second <= 0) setMinute(minute - 1), setSecond(59);
        }, 1000);
      }
    }

    //set the class danger to change the timer color when min <= 0
    if (minute <= 0) {
      counter.current?.classList.add("danger");
    } else counter.current?.classList.remove("danger");

    //clear the timer when the component is mounted out
    return () => clearTimeout(runTime);
  }, [minute, second, play, pause]);

  return (
    <div id="counter" className="sex">
      <div id="time-wrapper">
        <div className="title" id="timer-label">
          {text}
        </div>
        <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          ref={sound}
        ></audio>
        <div className="time" id="time-left" ref={counter}>
          {`${minute.toString().length < 2 ? "0" + minute : minute}:${
            second.toString().length < 2 ? "0" + second : second
          }`}
        </div>
      </div>
    </div>
  );
};

export default Counter;
