import models from '../../../models';
import Promise from 'bluebird';

export class userprojectDao {
  static creatNew(_body){
    return new Promise((resolve, reject) => {
      models.userproject.create({
        user_id: _body.user_id,
        project_id: _body.project_id
      }).then( user => { resolve(user)})
        .catch(error => reject("Not created"))
    })
  }

 /* static getAll(){
    return new Promise((resolve, reject) => {
      models.userproject.findAndCountAll()
        .then(user => { resolve(user)})
        .catch(error => reject(error))
    })
  }*/

   static getAll(){
     return new Promise((resolve, reject) => {
       models.userproject.findAll( {include:[{model: models.user}]})
         .then(branch => { resolve(branch)})
         .catch(error => reject(error))
       console.log("------------")
     })
   }

  static getById(_paramet){
    return new Promise((resolve, reject) => {
      models.userproject.findAll({where: { id: _paramet}})
        .then(user => { resolve(user)})
        .catch(error => reject(error))
    })
  }

  static update(_body, _paramet){
    return new Promise((resolve, reject) => {
      models.userproject.update({
        user_id: _body.user_id,
        project_id: _body.project_id
      },{where: { id: _paramet}})
        .then(user => { resolve(user)})
        .catch(error => reject(error))
    })
  }

  static delete(_paramet){
    return new Promise((resolve, reject) => {
      models.userproject.destroy({where: { id: _paramet}})
        .then(user => { resolve(user)})
        .catch(error => reject(error))
    })
  }
}
