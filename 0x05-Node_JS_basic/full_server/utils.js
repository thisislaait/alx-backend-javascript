// full_server/utils.js
import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').slice(1); // Ignore header
    const students = {};

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    });

    return students;
  } catch (error) {
    throw error;
  }
};
