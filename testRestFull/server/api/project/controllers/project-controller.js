import {projectDao} from '../dao/project-dao';

export class projectController {
  static getAll(req, res) {
    projectDao.getAll()
      .then(project => res.status(200).json(project))
      .catch(error => res.status(400).json(error))
  }

  static createNew(req, res) {
    let _body = req.body
    projectDao.creatNew(_body)
      .then(project => res.status(200).json(project))
      .catch(error => res.status(400).json(error))
  }

  static getById(req, res) {
    let _paramet = req.params.id
    projectDao.getById(_paramet)
      .then(project => res.status(200).json(project))
      .catch(error => res.status(400).json(error))
  }

  static update(req, res) {
    let _body = req.body
    let _paramet = req.params.id
    projectDao.update(_body,_paramet)
      .then(project => res.status(200).json(project))
      .catch(error => res.status(400).json(error))
  }

  static delete(req, res) {
    let _paramet = req.params.id
    projectDao.delete(_paramet)
      .then(project => res.status(200).json(project))
      .catch(error => res.status(400).json(error))
  }
}

