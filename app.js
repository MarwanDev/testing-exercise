const stringLength = (string) => {
  const length = string.length;
  if (length === 0) {
    throw new Error("Input string cannot be empty");
  } else if (length > 10) {
    throw new Error("Input string cannot be longer than 10 characters");
  }
  return length;
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
}
