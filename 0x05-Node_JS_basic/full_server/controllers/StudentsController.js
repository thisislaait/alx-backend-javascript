// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('database.csv');
      res.status(200).send('This is the list of our students\n' +
        Object.entries(students)
          .map(([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`)
          .join('\n'));
    } catch {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase('database.csv');
      const names = students[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch {
      res.status(500).send('Cannot load the database');
    }
  }
}
