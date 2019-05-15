import {userprojectController} from  '../controllers/userproject-controller';


export class userprojectRoutes {
  static init(router){
    router.route('/userproject')
      .get(userprojectController.getAll)
      .post(userprojectController.createNew);

    router.route('/userproject/:id')
      .get(userprojectController.getById)
      .put(userprojectController.update)
      .delete(userprojectController.delete)
  }
}
