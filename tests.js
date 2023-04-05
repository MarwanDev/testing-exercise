import stringLength from "./app";
import reverseString from "./app";
import Calculator from "./calculator";
const assert = require("assert");

test("throws error for empty string", () => {
  expect(() => stringLength("")).toThrow("Input string cannot be empty");
});
test("throws error for string longer than 10 characters", () => {
  const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  expect(() => stringLength(longString)).toThrow(
    "Input string cannot be longer than 10 characters"
  );
});
test("returns the correct length for a valid string", () => {
  expect(stringLength("hello")).toBe(5);
});

// Test case 1
const reversedString1 = reverseString("hello");
console.log(reversedString1); // Output: "olleh"
console.assert(reversedString1 === "olleh", "Test case 1 failed");
// Test case 2
const reversedString2 = reverseString("racecar");
console.log(reversedString2);
// Output: "racecar"
console.assert(reversedString2 === "racecar", "Test case 2 failed");

const calculator = new Calculator(); 
// Test cases for add() method
console.assert(calculator.add(2, 3) === 5, "Test case 1 failed for add()");
console.assert(calculator.add(-5, 3) === -2, "Test case 2 failed for add()");
console.assert(calculator.add(0, 0) === 0, "Test case 3 failed for add()"); 
// Test cases for subtract() method
console.assert(
  calculator.subtract(5, 2) === 3,
  "Test case 1 failed for subtract()"
);
console.assert(
  calculator.subtract(0, 0) === 0,
  "Test case 2 failed for subtract()"
);
console.assert(
  calculator.subtract(-5, -2) === -3,
  "Test case 3 failed for subtract()"
); 
// Test cases for divide() method
console.assert(
  calculator.divide(10, 2) === 5,
  "Test case 1 failed for divide()"
);
console.assert(
  calculator.divide(0, 5) === 0,
  "Test case 2 failed for divide()"
);
console.assert(
  isNaN(calculator.divide(5, 0)),
  "Test case 3 failed for divide()"
); 
// Test cases for multiply() method
console.assert(
  calculator.multiply(3, 4) === 12,
  "Test case 1 failed for multiply()"
);
console.assert(
  calculator.multiply(0, 5) === 0,
  "Test case 2 failed for multiply()"
);
console.assert(
  calculator.multiply(-5, -2) === 10,
  "Test case 3 failed for multiply()"
);
