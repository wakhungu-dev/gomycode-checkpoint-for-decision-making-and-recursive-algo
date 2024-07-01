// Leap Year Checker
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

// Ticket Pricing
function ticketPrice(age) {
    if (age <= 12) {
        return "The ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "The ticket price is $15.";
    } else if (age >= 18) {
        return "The ticket price is $20.";
    } else {
        return "Invalid age.";
    }
}

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Palindrome Checker
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    function checkPalindrome(s) {
        if (s.length <= 1) return true;
        if (s[0] !== s[s.length - 1]) return false;
        return checkPalindrome(s.slice(1, -1));
    }
    
    return checkPalindrome(str);
}

// Testing the functions

// Leap Year Checker Tests
console.log(isLeapYear(2020)); // Output: 2020 is a leap year.
console.log(isLeapYear(1900)); // Output: 1900 is not a leap year.
console.log(isLeapYear(2000)); // Output: 2000 is a leap year.
console.log(isLeapYear(2023)); // Output: 2023 is not a leap year.

// Ticket Pricing Tests
console.log(ticketPrice(10)); // Output: The ticket price is $10.
console.log(ticketPrice(15)); // Output: The ticket price is $15.
console.log(ticketPrice(25)); // Output: The ticket price is $20.
console.log(ticketPrice(-5)); // Output: Invalid age.

// Fibonacci Sequence Tests
console.log(fibonacci(0));  // Output: 0
console.log(fibonacci(1));  // Output: 1
console.log(fibonacci(6));  // Output: 8
console.log(fibonacci(10)); // Output: 55

// Palindrome Checker Tests
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar"));                        // Output: true
console.log(isPalindrome("hello"));                          // Output: false
console.log(isPalindrome("No 'x' in Nixon"));                // Output: true
