import {userController} from  '../controllers/user-controller';


export class userRoutes {
  static init(router){
    router.route('/user')
      .get(userController.getAll)
      .post(userController.createNew);

    router.route('/user/:id')
      .get(userController.getById)
      .put(userController.update)
      .delete(userController.delete)
  }
}
