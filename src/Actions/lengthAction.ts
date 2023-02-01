import { inr_break, inr_session, dcr_break, dcr_session, reset_lens } from "../Operations/LenOpr";

interface action {
  type: string
}

export const incrementBreak = (): action => ({
  type: inr_break
});

export const decrementBreak = (): action => ({
  type: dcr_break
});

export const incrementSession = (): action => ({
  type: inr_session
});

export const decrementSession = (): action => ({
  type: dcr_session
});
export const resetLengths = (): action => ({
  type: reset_lens
})