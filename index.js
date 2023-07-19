// Code your solutions in this file
function writeCards(stringNames, eventName) {
    const messages = [];

    for (let counter = 0; counter < stringNames.length; counter++) {
        let name = stringNames[counter];
        let message = `Thank you, ${name}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }

    return messages;

}

console.log(writeCards(["Linda", "Alice", "Val"], "surprise"));


//CountDown


function countDown(positiveInteger) {
    let x = 10;
    while (x >= 0) {

        console.log(x--);
    }

}
countDown(10);