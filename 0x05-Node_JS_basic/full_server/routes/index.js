// full_server/routes/index.js
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
