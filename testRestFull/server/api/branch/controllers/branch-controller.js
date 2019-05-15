import {branchDao} from '../dao/branch-dao';

export class branchController {
  static getAll(req, res) {
    branchDao.getAll()
      .then(branch => res.status(200).json(branch))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
   let _body = req.body;
   console.log('---------',_body)
    branchDao.createNew(_body)
      .then(branch => res.status(200).json(branch))
      .catch(error => res.status(400).json(error));
  }

  static getById(req, res) {
    let _paramet = req.params.id;
    branchDao.getById(_paramet)
      .then(branch => res.status(200).json(branch))
      .catch(error => res.status(400).json(error));
  }

  static update(req, res) {
    let _body = req.body;
    let _paramet = req.params.id;
    console.log("-------")
    branchDao.update(_body, _paramet)
      .then(branch => res.status(200).json(branch))
      .catch(error => res.status(400).json(error));
  }

  static delete(req, res) {
    let _paramet = req.params.id;
    branchDao.delete( _paramet)
      .then(branch => res.status(200).json(branch))
      .catch(error => res.status(400).json(error));
  }

}
