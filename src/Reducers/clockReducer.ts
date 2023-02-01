import { pausePlay, reset } from "../Operations/ClockOpr"

type Oprs = {
  play: boolean,
  pause: boolean
  reset: boolean
}

const initial: Oprs = {
  play: false,
  pause: true,
  reset: true
}


const clockReducer = (state: Oprs = initial, action: { type: string }): Oprs => {
  switch (action.type) {
    case pausePlay:
      return { play: !state.play, pause: !state.pause, reset: false }
    case reset:
      return { play: false, pause: true, reset: true }
    default:
      return { ...state }
  }
}

export default clockReducer