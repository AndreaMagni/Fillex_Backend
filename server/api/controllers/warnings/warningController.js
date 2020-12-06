import warningModel from '../../../models/warning';

export class WarningController {
  all(req, res) {
    warningModel.findAll().then((warning) => res.json(warning));
  }
}

export default new WarningController();
