const fs = require('fs');
const path = require('path');

// const filePath = path.join(__dirname, '01-read-file', 'text.txt');

fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
