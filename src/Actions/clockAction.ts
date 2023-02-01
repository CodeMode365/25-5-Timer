import { ActionCreator } from "redux";
import { pausePlay, reset } from "../Operations/ClockOpr";


export const pausePlayClock = () => ({
  type: pausePlay
})
export const resetClock = () => ({
  type: reset
})