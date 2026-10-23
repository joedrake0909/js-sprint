// Recieve a string of text 

// This slpit the recieved string into words 

// Remove empty entries

// Return the remaining words as an array

function wordCount(text) {
    const words =  text.split(" ");
    const realWords = words.filter(word => word !== "");
    return realWords.length;
}

console.log(wordCount("the cat sat"));
console.log(wordCount("the cat  sat"));
console.log(wordCount("hello"));


// Receive a string
// Convert the string to lowercase
// Reverse the lowercase string and compare it with the original lowercase 

function isPalindrome(text) {
    const lowerText = text.toLowerCase();
    const reversedText = lowerText.split("").reverse().join("");
    return lowerText === reversedText;
}

console.log(isPalindrome("Racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Madam"));


// Receive a string
// Capitalize the first letter of each word in the string
// Return the completed title-case string

function titleCase(text) {
    const words = text.split(" ");
    const capitalizedWords = words.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });

    const result = capitalizedWords.join(" ");
    return result;
}

console.log(titleCase("hello from accra"));
console.log(titleCase("javascript is fun"));
console.log(titleCase("welcome to ghana"));


// Convert the text to lowercase
// Replace spaces and punctuation with hyphens, eliminating unwanted characters
// Return the completed slug string

function slugify(text) {
    const lowerText = text.toLowerCase();
    const hyphenatedText = lowerText.replace(/[^a-z0-9]/g, "-");
    const cleanText = hyphenatedText.replace(/-+/g, "-");
    const finalSlug = cleanText.replace(/^-+|-+$/g, "");

    return finalSlug;
}

console.log(slugify("Hello, World! 2026"));
console.log(slugify(" Hello World! "));
console.log(slugify("JavaScript   Backend Developer"));