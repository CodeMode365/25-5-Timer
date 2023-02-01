import { inr_break, inr_session, dcr_break, dcr_session, reset_lens } from "../Operations/LenOpr"

interface lengths {
  break_len: number
  session_len: number
}

const initalState: lengths = {
  break_len: 5,
  session_len: 25
}



const lengthReducer = (state: lengths = initalState, action: { type: string }): lengths => {
  switch (action.type) {
    case inr_break:
      if (state.break_len < 60) {
        return { ...state, break_len: state.break_len + 1 }
      }
      return { ...state }
    case dcr_break:
      if (state.break_len > 1) {
        return { ...state, break_len: state.break_len - 1 }
      }
      return { ...state }
    case inr_session:
      if (state.session_len < 60) {
        return { ...state, session_len: state.session_len + 1 }
      }
      return { ...state }
    case dcr_session:
      if (state.session_len > 1) {
        return { ...state, session_len: state.session_len - 1 }
      }
      return { ...state }
    case reset_lens:
      return { ...state, break_len: 5, session_len: 25 }
    default:
      return { ...state }
  }
}

export default lengthReducer