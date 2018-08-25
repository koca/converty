import { vsprintf } from "sprintf-js";
import { extractSeparator } from "../utils";

export const TOGGLE_EXAMPLES = ({ getters, commit }) => {
  commit("SET_SHOW_EXAMPLES", !getters.showExamples);
};
export const RESET = ({ commit }) => {
  commit("RESET_STATE");
};
export const CONVERT = ({ commit }, { input, format }) => {
  try {
    const defaultSep = /[,，;\s]/g;
    const doc = input;
    const formatStr = format;
    const lines = doc.match(/[^\r\n]+/g);
    let sep = defaultSep;
    let result = "";
    for (let line of lines) {
      let s = extractSeparator(line);
      if (s) {
        sep = s;
        continue;
      }
      const args = line.split(sep).filter(Boolean);
      if (args.length == 0) {
        continue;
      }
      result += vsprintf(formatStr, args) + "\n";
    }
    commit("SET_OUTPUT", result);
  } catch (error) {
    commit(
      "SET_OUTPUT",
      "The values you provide are empty or not correct or something bad happened"
    );
  }
};
