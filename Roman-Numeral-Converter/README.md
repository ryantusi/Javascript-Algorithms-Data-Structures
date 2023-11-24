# Roman Numeral Converter

This JavaScript code provides a function to convert decimal numbers to their Roman numeral equivalent.

## Function: `convertToRoman(num)`

The function takes a decimal number (`num`) as input and returns its Roman numeral representation.

### Code Explanation:

The code implements a conversion algorithm using a while loop and a series of conditional statements to build the Roman numeral string (`roman`).

1. **Looping through Decimal Numbers**:
   - Starting from the input number (`num`), the algorithm subtracts the largest possible Roman numeral value and appends its Roman numeral representation to the `roman` string.
   - It iterates through different cases (e.g., 1000, 900, 500, etc.) to construct the Roman numeral representation.

2. **Final Result**:
   - The function eventually returns the final `roman` string, which represents the input decimal number in Roman numeral form.

### Example Usage:
```javascript
console.log(convertToRoman(44)); // Outputs "XLIV"
