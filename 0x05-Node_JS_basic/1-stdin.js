const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle the input from the user
rl.on('line', (input) => {
  // Output the user's name
  process.stdout.write(`Your name is: ${input}\n`);

  // Close the readline interface after receiving input
  rl.close();
});

// Handle the end of the input stream
rl.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
