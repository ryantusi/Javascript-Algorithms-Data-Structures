# ROT13 Cipher Implementation

This JavaScript code implements the ROT13 (rotate by 13 places) cipher, a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet.

## Function: `rot13(str)`

This function takes a string (`str`) as input and applies the ROT13 cipher to it.

### Steps:
1. It converts the characters in the input string to their respective Unicode values and stores them in an array.
2. It then performs the ROT13 substitution on each character:
   - Characters outside the range of uppercase letters (Unicode values below 65 and spaces) remain unchanged.
   - Characters from 'N' (Unicode 78) onwards are shifted backward by 13 places in the alphabet.
   - Characters before 'N' are shifted forward by 13 places in the alphabet.
3. Finally, it joins the modified characters back into a string and returns the resulting ROT13-encoded string.

### Example:
```javascript
console.log(rot13("SERR CVMMN!")); // Outputs "FREE PIZZA!"
