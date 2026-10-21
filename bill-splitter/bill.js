const bill = 250;
const tipPercent = 10;
const people = 4;

console.log(bill, tipPercent, people);

const tip = bill * (tipPercent / 100);
console.log(tip);

const total = bill + tip;
console.log(total);


if (people <= 0) {
    console.log("Error: Number of people must be greater than zero.");
} else {
    const perPerson = total / people;
    console.log(perPerson);
}




