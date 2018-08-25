const state = {
  input: "",
  format: "",
  output: "",
  showExamples: false
};
export const getDefaultState = () => ({ ...state });
export default { ...state };
