import { set_time, get_time, reset_time } from "../Operations/TimeOpr"

export function setTime(min: number = 25, sec: number = 0): { min: number, sec: number } {
  let newTime = new Date()
  newTime.setMinutes(min)
  newTime.setSeconds(sec)
  return { min: newTime.getMinutes(), sec: newTime.getSeconds() }
}

interface timesType {
  min: number
  sec: number
}
const initial: timesType = {
  min: setTime().min,
  sec: setTime().sec
}


const timingReducer = (state: timesType = initial, action: { type: string, payload: { min: number, sec: number } }): timesType => {
  switch (action.type) {
    case set_time:
      return { ...state, min: action.payload.min, sec: action.payload.sec }
    case get_time:
      return { ...state }
    case reset_time:
      return { min: setTime().min, sec: setTime().sec }
    default:
      return { ...state }

  }
}
export default timingReducer