export const extractSeparator = str => {
  if (str.startsWith("@sep=")) {
    return new RegExp("[" + str.slice(5) + "]", "g");
  }
  return null;
};
