import { getDefaultState } from "./state";

export const SET_INPUT = (state, payload) => {
  state.input = payload;
};
export const SET_FORMAT = (state, payload) => {
  state.format = payload;
};
export const SET_OUTPUT = (state, payload) => {
  state.output = payload;
};
export const SET_SHOW_EXAMPLES = (state, payload) => {
  state.showExamples = payload;
};
export const RESET_STATE = state => {
  Object.assign(state, getDefaultState());
};
