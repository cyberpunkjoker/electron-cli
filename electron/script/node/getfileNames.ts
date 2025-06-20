import fs from 'fs';

export function getFilesInDrive(drivePath = 'D:/') {
  try {
    const files = fs.readdirSync(drivePath);

    console.log('files', files)
    return files;
  } catch (err) {
    console.error('读取失败:', err);
    return [];
  }
}

