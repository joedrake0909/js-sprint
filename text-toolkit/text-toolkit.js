//1. Version 1 rebuild from memory
// Count the number of words in a supplied string
function wordCount(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    const trimmedStr = str.trim();

    if (trimmedStr === '') {
        return 0;
    }

    return trimmedStr.split(/\s+/).length;

}

console.log(wordCount("Learning JavaScript builds strong foundations"));
console.log(wordCount("   "));
console.log(wordCount(""));
console.log(wordCount("Learning   JavaScript"));

try {
    console.log(wordCount(123));
} catch (error) {
    console.error(error.message);
}


// 2. Version 2 rebuild from memory
function isPalindrome(str) {

    // Validate that the input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Normalize the string to lowercase
    const normalizedStr = str.toLowerCase();

    // Reverse the normalized string
    const reversedStr = [...normalizedStr].reverse().join('');
    
    // Compare the reversed string with the normalized original
    return normalizedStr === reversedStr;

}

console.log(isPalindrome("RaceCar"));
console.log(isPalindrome("MADAM"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("a"));
console.log(isPalindrome(""));

try {
    console.log(isPalindrome(123));
} catch (error) {
    console.error(error.message);
}

// 3. Version 3 rebuild from memory
function titleCase(str) {
    // Validate that the input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    const trimmedStr = str.trim();

    // Handle an empty string
    if (trimmedStr === '') {
        return '';
    }

    const words = trimmedStr.split(/\s+/);
    
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(' ');
}
console.log(titleCase("learning javascript is interesting"));
console.log(titleCase("   learning   javascript   "));
console.log(titleCase(""));
console.log(titleCase("hello WORLD"));


// 4. Version 4 rebuild from memory
// Convert a supplied string into a lowercase, hyphen-separated slug
function generateSlug(str) {
    // Validate the input
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    const trimmedStr = str.trim();

    // Handle empty input
    if (trimmedStr === '') {
        return '';
    }

    // Convert the entire string to lowercase
    const lowerCaseStr = trimmedStr.toLowerCase();
    
    // Split the string into words
    const words = lowerCaseStr.split(/\s+/);

    // Join the words using hyphens
    const slug = words.join('-');

    return slug;
}

console.log(generateSlug("Learning JavaScript From Scratch"));
console.log(generateSlug("BUILDING BACKEND SYSTEMS"));
console.log(generateSlug("  Python   Django   Developer  "));
console.log(generateSlug(""));

try {
    console.log(generateSlug(123));
} catch (error) {
    console.error(error.message);
}
