// Miles-to-kilometers converter:
function convertMilesToKilometers(milesInput) {
    let kilometers = milesInput * 1.60934;
    return kilometers;
}

let miles = prompt("Enter miles:");
let kiloMessage = `The distance of ${convertMilesToKilometers(miles)} kilometers is equal to ${miles} miles.`;

console.log(kiloMessage);

// from ChatGPT:
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function convertMilesToKilometers(milesInput) {
//     let kilometers = milesInput * 1.60934;
//     return kilometers;
// }

// readline.question('Enter miles: ', (miles) => {
//     let message = `The distance of ${convertMilesToKilometers(miles)} kilometers is equal to ${miles} miles.`;
//     console.log(message);
//     readline.close();
// });

// BMI Calculator:
function calculateBMI(weightInput, heightInput) {
    let BMI = weightInput / (heightInput ** 2);
    return BMI;
}

let weightInput = prompt("Enter weight:");
let heightInput = prompt("Enter height");
let bmiMessage = `Your BMI value is: ${calculateBMI(weightInput, heightInput)}`;

console.log(bmiMessage);
