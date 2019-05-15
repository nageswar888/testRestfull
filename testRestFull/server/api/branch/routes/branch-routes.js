import {branchController} from '../controllers/branch-controller';

export class branchRoutes {
  static init(router) {
    router.route('/branch')
      .get(branchController.getAll)
      .post(branchController.createNew);
    router.route('/branch/:id')
      .get(branchController.getById)
      .put(branchController.update)
      .delete(branchController.delete)
  }
}
