const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file.name);

    fs.stat(filePath, (statErr, stats) => {
      if (statErr) {
        console.error(`Error getting file stats for ${file.name}:`, statErr);
        return;
      }

      const fileName = file.name;
      const fileExtension = path.extname(file.name);
      const sizeInBytes = stats.size;
      if (file.isFile()) {
        const sizeInKb = (sizeInBytes / 1024).toFixed(3);
        console.log(`${fileName} - ${fileExtension} - ${sizeInKb}kb`);
      }
    });
  });
});
