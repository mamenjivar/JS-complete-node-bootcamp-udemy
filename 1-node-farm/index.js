const fs = require('fs');

// read
const read = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(read);

// write
const textOut = `This is what we know about the avocado: ${read}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log("file written!");