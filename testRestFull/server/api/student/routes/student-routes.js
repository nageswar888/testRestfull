import {studentController} from '../controllers/student-controller';

export class studentRoutes {
  static init(router){
  router.route('/student')
    .get(studentController.getAll)
    .post(studentController.createNew);

  router.route('/student/:id')
    .get(studentController.getById)
    .put(studentController.update)
    .delete(studentController.delete)
  }
}
