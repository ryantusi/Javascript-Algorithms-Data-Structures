// A word is palindrome if the reverse is same as the original

// Using Data Structures and Algorithm, building our own palindrome checker without using built-in functions

function palindrome(str) {
    let word = str.toLowerCase();
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }

    console.log("Original Word: " + word);
    console.log("Reversed: " + reverse);
    
    if (word == reverse) {
        return true;
    } else {
        return false;
    }
  }

// Test it out by replacing the string inside palindrome()
const result = palindrome("Mom");
console.log("Is Palindrome? " + result )