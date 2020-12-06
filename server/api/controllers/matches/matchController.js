import matchModel from '../../../models/match';

export class MatchController {
  all(req, res) {
    matchModel.findAll().then((match) => res.json(match));
  }
}

export default new MatchController();
