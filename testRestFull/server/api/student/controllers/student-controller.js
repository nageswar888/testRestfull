import {studentDao} from '../dao/student-dao';

export class studentController {
  static getAll(req, res) {
    studentDao.getAll()
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error))
  }

  static createNew(req, res) {
    let _body = req.body
    studentDao.creatNew(_body)
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error))
  }

  static getById(req, res) {
    let _paramet = req.params.id
    studentDao.getById(_paramet)
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error))
  }

  static update(req, res) {
    let _body = req.body
    let _paramet = req.params.id
    studentDao.update(_body,_paramet)
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error))
  }

  static delete(req, res) {
    let _paramet = req.params.id
    studentDao.delete(_paramet)
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error))
  }
}

