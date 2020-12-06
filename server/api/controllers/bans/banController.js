import banModel from '../../../models/ban';

export class BanController {
  all(req, res) {
    banModel.findAll().then((ban) => res.json(ban));
  }
}

export default new BanController();
