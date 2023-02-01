import { get_time, reset_time, set_time } from "../Operations/TimeOpr";

export const getTime = () => ({ type: get_time })
export const resetTime = () => ({ type: reset_time })
export const setTime = (minutes: number, seconds: number) => ({ type: set_time, payload: { min: minutes, sec: seconds } })