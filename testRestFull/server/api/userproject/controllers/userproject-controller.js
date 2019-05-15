import {userprojectDao} from '../dao/userproject-dao';

export class userprojectController {
  static getAll(req, res) {
    userprojectDao.getAll()
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }

  static createNew(req, res) {
    let _body = req.body
    userprojectDao.creatNew(_body)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }

  static getById(req, res) {
    let _paramet = req.params.id
    userprojectDao.getById(_paramet)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }

  static update(req, res) {
    let _body = req.body
    let _paramet = req.params.id
    userprojectDao.update(_body,_paramet)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }

  static delete(req, res) {
    let _paramet = req.params.id
    userprojectDao.delete(_paramet)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }
}

