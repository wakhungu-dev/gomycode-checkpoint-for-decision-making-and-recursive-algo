# Decision Making and Recursion Tasks

This project implements various tasks using decision making constructs (`if-else` statements) and recursion in JavaScript.

## Tasks

### Decision Making (if-else and switch)

1. **Leap Year Checker**
    - Determines whether a given year is a leap year.
    - Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
    - Example:
      ```javascript
      console.log(isLeapYear(2020)); // Output: 2020 is a leap year.
      console.log(isLeapYear(1900)); // Output: 1900 is not a leap year.
      ```

2. **Ticket Pricing**
    - Determines the price of a movie ticket based on age.
    - Pricing:
        - Children (age <= 12): $10
        - Teenagers (age 13-17): $15
        - Adults (age >= 18): $20
    - Example:
      ```javascript
      console.log(ticketPrice(10)); // Output: The ticket price is $10.
      console.log(ticketPrice(25)); // Output: The ticket price is $20.
      ```

### Recursion

1. **Fibonacci Sequence**
    - Generates the nth Fibonacci number using recursion.
    - Example:
      ```javascript
      console.log(fibonacci(10)); // Output: 55
      ```

2. **Palindrome Checker**
    - Checks if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.
    - Example:
      ```javascript
      console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
      ```

## Usage

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Ensure you have Node.js installed. Run the JavaScript file using Node.js:
    ```bash
    node index.js
    ```

## Functions

### Leap Year Checker
```javascript
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `${year} is a leap year.`;
            } else {
                return `${year} is not a leap year.`;
            }
        } else {
            return `${year} is a leap year.`;
        }
    } else {
        return `${year} is not a leap year.`;
    }
}
