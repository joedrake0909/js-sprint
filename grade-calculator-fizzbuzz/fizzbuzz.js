const fizzNumber = 3;
const buzzNumber = 5;
const bazzNumber = 7;

const fizzWord = "Fizz";
const buzzWord = "Buzz";
const bazzWord = "Bazz";

let number = 1;

while (number <= 100) {
  let result = "";

  if (number % (fizzNumber * buzzNumber) === 0) {
    result += fizzWord + buzzWord;
  } else {
    if (number % fizzNumber === 0) result += fizzWord;
    if (number % buzzNumber === 0) result += buzzWord;
  }

  if (number % bazzNumber === 0) {
    result += bazzWord;
  }

  console.log(result || number);
  number++;
}