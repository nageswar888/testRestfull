import {branchRoutes} from '../api/branch/routes/branch-routes';
import {studentRoutes} from '../api/student/routes/student-routes';
import {userRoutes} from '../api/user/routes/user-routes';
import {projectRoutes} from '../api/project/routes/project-routes';
import {userprojectRoutes} from '../api/userproject/routes/userproject-routes';

export default class Routes {
   static init(app, router) {
     branchRoutes.init(router),
     studentRoutes.init(router),
     userRoutes.init(router),
       projectRoutes.init(router),
       userprojectRoutes.init(router)

     app.use("/", router);
   }
}
