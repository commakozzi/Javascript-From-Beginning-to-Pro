# Javascript From Beginning to Pro
 Javascript Training
## Function: letEnter()

This function prompts the user for their age and determines whether they are allowed to enter a venue and purchase alcohol based on their age.

### Parameters:
None

### Return Value:
None

### Example Usage:
```javascript
letEnter();
```

## Function Details:

1. **Prompting for Age:**
   - Prompts the user for their age using the `prompt()` function.
   - Stores the user input in the `userInput` variable.

2. **Checking Age Conditions:**
   - Uses conditional statements to determine the appropriate message based on the user's age.
   - If the user's age is greater than or equal to 21, sets `message` to "You may enter and purchase booze."
   - If the user's age is greater than or equal to 19 (but less than 21), checks an additional condition.
     - If the user's age is also greater than or equal to 21, sets `message` to "You may enter and purchase booze."
     - If the user's age is less than 21, sets `message` to "You may enter, but you may not purchase booze."
   - If the user's age does not satisfy any of the above conditions, sets `message` to "You may not enter!"

3. **Displaying the Message:**
   - Logs the `message` to the console using the `console.log()` function.

Please note that the code assumes the user will enter a numeric value for their age.
## Function: answerMe()

This function prompts the user for input, generates a random number, and generates a message based on the user input and the generated number.

### Parameters:
None

### Return Value:
None

### Example Usage:
```javascript
answerMe();
```

## Function: generateMessage(userInput, response)

This function generates a message by combining the user input and the response.

### Parameters:
- `userInput` (string): The user's input.
- `response` (string): The generated response.

### Return Value:
None

### Example Usage:
```javascript
generateMessage("What's the weather like?", "It's sunny!");
```

## Function: generateResponse(magicNumber)

This function generates a response based on the provided magic number.

### Parameters:
- `magicNumber` (number): The magic number used to determine the response.

### Return Value:
- `response` (string): The generated response based on the magic number.

### Example Usage:
```javascript
let response = generateResponse(3);
```

Please note that the `generateResponse()` function mentioned in the code refers to ChatGPT's implementation, not an actual function within the JavaScript code snippet provided.