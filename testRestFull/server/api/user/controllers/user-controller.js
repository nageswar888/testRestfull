import {userDao} from '../dao/user-dao';

export class userController {
  static getAll(req, res) {
    userDao.getAll()
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }

  static createNew(req, res) {
    let _body = req.body
    userDao.creatNew(_body)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }

  static getById(req, res) {
    let _paramet = req.params.id
    userDao.getById(_paramet)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }

  static update(req, res) {
    let _body = req.body
    let _paramet = req.params.id
    userDao.update(_body,_paramet)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }

  static delete(req, res) {
    let _paramet = req.params.id
    userDao.delete(_paramet)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
  }
}

