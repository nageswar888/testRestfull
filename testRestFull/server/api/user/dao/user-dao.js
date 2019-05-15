import models from '../../../models';
import Promise from 'bluebird';

export class userDao {
  static creatNew(_body){
    return new Promise((resolve, reject) => {
      models.user.create({
        name: _body.name
      }).then( user => { resolve(user)})
        .catch(error => reject("Not created"))
    })
  }

  static getAll(){
    return new Promise((resolve, reject) => {
      models.user.findAndCountAll()
        .then(user => { resolve(user)})
        .catch(error => reject(error))
    })
  }

  /* static getAll(){
     return new Promise((resolve, reject) => {
       models.student.findAll( {include:{model: models.branch}} )
         .then(branch => { resolve(branch)})
         .catch(error => reject(error))
       console.log("------------")
     })
   }*/

  static getById(_paramet){
    return new Promise((resolve, reject) => {
      models.user.findAll({where: { id: _paramet}})
        .then(user => { resolve(user)})
        .catch(error => reject(error))
    })
  }

  static update(_body, _paramet){
    return new Promise((resolve, reject) => {
      models.user.update({
        name: _body.name
      },{where: { id: _paramet}})
        .then(user => { resolve(user)})
        .catch(error => reject(error))
    })
  }

  static delete(_paramet){
    return new Promise((resolve, reject) => {
      models.user.destroy({where: { id: _paramet}})
        .then(user => { resolve(user)})
        .catch(error => reject(error))
    })
  }
}
