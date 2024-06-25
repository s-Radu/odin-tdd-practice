# Project Overview

This project is a collection of JavaScript utilities, including a calculator, string manipulation functions, and an array analyzer. It demonstrates the use of Babel for transpiling modern JavaScript code and Jest for unit testing. Below is a brief overview of each component within the project.

## Components

### Calculator

The calculator module (`calculator.js`) provides basic arithmetic operations: addition, subtraction, multiplication, and division. It includes input validation to ensure that only numbers are processed.

### Capitulize

The `capitulize.js` module contains a function to capitalize the first letter of a given string. It validates the input to ensure that it is a string.

### Analyze Array

The `analyzeArray.js` module offers a function to analyze an array of numbers, returning its average, minimum, maximum, and length.

### Caesar Cipher

The `caesarChiper.js` module implements the Caesar cipher encryption and decryption. It supports basic shift, wraparound shift, case sensitivity, and preservation of non-alphabetic characters.

### Reverse String

Although not detailed in the provided context, we assume a `reverseString.js` module exists, likely providing functionality to reverse the characters in a given string.

## Testing

Each module is accompanied by a Jest test file, ensuring the correctness of the implementation. The tests cover various scenarios, including edge cases and input validation.

- `calculator.test.js`
- `capitulize.test.js`
- `analyzeArray.test.js`
- `caesarChiper.test.js`
- `reverseString.test.js`

## Setup and Running Tests

To run the tests, ensure you have Node.js and npm installed. Then, follow these steps:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run tests using Jest:

```bash
    npm test
```
