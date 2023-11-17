function isPalindrome(str) {
    // Convert the input string to lowercase
    let word = str.toLowerCase();

    // Initialize an empty string to store the reversed word
    let reverse = "";

    // Loop through each character of the word in reverse order and create the reversed string
    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }

    // Display the original word and the reversed word
    console.log("Original Word: " + word);
    console.log("Reversed: " + reverse);

    // Check if the original word is equal to the reversed word
    if (word == reverse) {
        return true; // If equal, it's a palindrome
    } else {
        return false; // If not equal, it's not a palindrome
    }
}

// Test the function with the input "Mom"
const result = isPalindrome("Mom");
console.log("Is Palindrome? " + result);