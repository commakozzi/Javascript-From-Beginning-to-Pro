/* ---------------------------------------------
Begin Practice exercise 4.1:
--------------------------------------------- */

let happy = false;
//console.log(happy);

if (happy) {
    console.log("I'm happy!");
} else {
    console.log("I am not happy :-(");
}

if (!happy) {
    console.log("I am not happy :-(");
} else {
    console.log("I'm happy!");
}

/* ---------------------------------------------
End Practice exercise 4.1.
--------------------------------------------- */

/* ---------------------------------------------
Begin Practice exercise 4.2:
--------------------------------------------- */
function letEnter() {
    let userInput = prompt("what's your age?:");
    let message = "";

    if (userInput >= 21) {
        message = "You may enter and purchase booze.";
    } else if (userInput >= 19) {
        if (userInput >= 21) {
            message = "You may enter and purchase booze.";
        } else {
            message = "You may enter, but you may not purchase booze.";
        }
    } else {
        message = "You may not enter!"
    }

    console.log(message);
}

/* ---------------------------------------------
End Practice exercise 4.2.
--------------------------------------------- */

/* ---------------------------------------------
Begin Practice exercise 4.3:
--------------------------------------------- */
let ID = true;

ID ? console.log("You may enter.") : console.log("You may not enter.");

/* ---------------------------------------------
End Practice exercise 4.3.
--------------------------------------------- */

/* ---------------------------------------------
Begin Practice exercise 4.4:
--------------------------------------------- */
function magic8Ball () {
    let randomSeed = Math.random();
    let rawNumber = randomSeed * 5;  /* allows 6 choices for messages 
                                        (see generateResponse()) */
    let magicNumber = Math.floor(rawNumber);
    let userInput = "";
    let response = generateResponse(magicNumber);

    userInput = prompt("Ask me anything!");

    //generateResponse(magicNumber);

    generateMessage(userInput, response);
}

function generateMessage (userInput, response) {
    console.log(`You asked \"${userInput}\". And to that I say \"${response}\"`);
}

// ChatGPT's generateResponse():
function generateResponse(magicNumber) {
    switch (magicNumber) {
        case 0:
            return "Definitely not!";
        case 1:
            return "Maybe?";
        case 2:
            return "Try again.";
        case 3:
            return "Looking likely...";
        case 4:
            return "You have a good chance!";
        case 5:
            return "Absolutely!!";
        default:
            return "I don't know.";
    }
}

// My function generateResponse() (the way the book recommends for console.log()):
// function generateResponse (magicNumber) {
//     switch (magicNumber) {
//         case 0:
//             response = "definitely not!";
//             generateMessage(response);
//             break;
//         case 1:
//             response = "maybe?";
//             generateMessage(response);
//             break;
//         case 2:
//             response = "Try again.";
//             generateMessage(response);
//             break;
//         case 3:
//             response = "looking likely...";
//             generateMessage(response);
//             break;
//         case 4:
//             response = "You have a good chance!";
//             generateMessage(response);
//             break;
//         case 5:
//             response = "Absolutely!!";
//             generateMessage(response);
//             break;
//     }
// }

/* ---------------------------------------------
End Practice exercise 4.4.
--------------------------------------------- */