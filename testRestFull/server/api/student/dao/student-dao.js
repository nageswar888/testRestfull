import models from '../../../models';
import Promise from 'bluebird';

export class studentDao {
  static creatNew(_body){
    return new Promise((resolve, reject) => {
      models.student.create({
        name: _body.name,
        bid: _body.bid
      }).then( student => { resolve(student)})
        .catch(error => reject("Not created"))
    })
  }

  static getAll(){
    return new Promise((resolve, reject) => {
      models.student.findAndCountAll()
        .then(student => { resolve(student)})
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
      models.student.findAll({where: { id: _paramet}})
        .then(student => { resolve(student)})
        .catch(error => reject(error))
    })
  }

  static update(_body, _paramet){
    return new Promise((resolve, reject) => {
      models.student.update({
        name: _body.name,
        bid: _body.bid
      },{where: { id: _paramet}})
        .then(student => { resolve(student)})
        .catch(error => reject(error))
    })
  }

  static delete(_paramet){
    return new Promise((resolve, reject) => {
      models.student.destroy({where: { id: _paramet}})
        .then(student => { resolve(student)})
        .catch(error => reject(error))
    })
  }
}
