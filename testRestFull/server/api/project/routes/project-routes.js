import {projectController} from  '../controllers/project-controller';


export class projectRoutes {
  static init(router){
    router.route('/project')
      .get(projectController.getAll)
      .post(projectController.createNew);

    router.route('/project/:id')
      .get(projectController.getById)
      .put(projectController.update)
      .delete(projectController.delete)
  }
}
