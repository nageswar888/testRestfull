import models from '../../../models';
import Promise from 'bluebird';

export class projectDao {
  static creatNew(_body){
    return new Promise((resolve, reject) => {
      models.project.create({
        name: _body.name
      }).then( project => { resolve(project)})
        .catch(error => reject("Not created"))
    })
  }

  static getAll(){
    return new Promise((resolve, reject) => {
      models.project.findAndCountAll()
        .then(project => { resolve(project)})
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
      models.project.findAll({where: { id: _paramet}})
        .then(project => { resolve(project)})
        .catch(error => reject(error))
    })
  }

  static update(_body, _paramet){
    return new Promise((resolve, reject) => {
      models.project.update({
        name: _body.name
      },{where: { id: _paramet}})
        .then(project => { resolve(project)})
        .catch(error => reject(error))
    })
  }

  static delete(_paramet){
    return new Promise((resolve, reject) => {
      models.project.destroy({where: { id: _paramet}})
        .then(project => { resolve(project)})
        .catch(error => reject(error))
    })
  }
}
