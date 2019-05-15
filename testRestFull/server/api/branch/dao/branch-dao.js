import models from '../../../models';
import Promise from 'bluebird';

export class branchDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.branch.findAndCountAll()
        .then(branch => { resolve(branch); })
        .catch(error => { reject(error) })
    })
  }

 /* static getAll() {
   return new Promise((resolve, reject) =>{
     models.branch.findAll({include:{ model: models.student}})
       .then(branch => { resolve(branch); })
       .catch(error =>{ reject(error)})
   })
 }*/

  static createNew(_body) {
    return new Promise((resolve, reject) => {
      models.branch.create({
        branchname: _body.name
      }).then(branch => {
        resolve(branch)
      })
        .catch(error => reject("Not created"))
    })
  }

  static getById(_paramet) {
    return new Promise((resolve, reject) => {
      models.branch.findAll({where: {id: _paramet}})
        .then(branch => {
          resolve(branch);
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static update(_body, _paramet) {
    return new Promise((resolve, reject) => {
      models.branch.update(
        {
          branchname: _body.name,
        },
        {where: {id: _paramet}}).then(branch => {
        resolve(branch);
      }).catch(error => {
        reject(error)
      })
    })
  }

  static delete( _paramet) {
    return new Promise((resolve, reject) =>{
      models.branch.destroy({where: { id: _paramet}})
        .then(branch => { resolve(branch); })
        .catch(error =>{ reject("error")})
    })
  }

}

