const fs = require('fs').promises;
const path = require('path');

async function copyDir(sourceDir, targetDir) {
  try {
    const files = await fs.readdir(sourceDir);
    await fs.mkdir(targetDir, { recursive: true });

    await Promise.all(
      files.map(async (file) => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        const stats = await fs.stat(sourcePath);

        if (stats.isDirectory()) {
          await copyDir(sourcePath, targetPath);
        } else {
          await fs.copyFile(sourcePath, targetPath);
        }
      }),
    );

    console.log(`Directory ${sourceDir} copied to ${targetDir}`);
  } catch (error) {
    console.error('Error copying directory:', error);
  }
}

const sourceFolder = 'files';
const targetFolder = 'files-copy';

const sourcePath = path.join(__dirname, sourceFolder);
const targetPath = path.join(__dirname, targetFolder);

copyDir(sourcePath, targetPath);
