// const path = require('path');
// const readline = require('readline');
// const { createWriteStream } = require('fs');
// const { stdin: input, stdout: output } = require('process');

// const outputFilePath = path.join(__dirname, 'text.txt');
// const writeStream = createWriteStream(outputFilePath);

// const rl = readline.createInterface({
//   input,
//   output,
// });

// console.log(
//   'Hi! Enter your card number, date, cvv code, or type "exit" to end the process.',
// );

// const userInputHandler = (input) => {
//   if (input.toLowerCase() === 'exit') {
//     console.log('Exiting. Goodbye!');
//     rl.close();
//     writeStream.end();
//   } else {
//     writeStream.write(input + '\n');
//     rl.question('', userInputHandler);
//   }
// };

// rl.question('', userInputHandler);

// rl.on('close', () => {
//   console.log('Process ended. Goodbye!');
//   writeStream.end();
// });
