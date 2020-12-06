import championModel from '../../../models/td_champion';

export class ChampionController {
  all(req, res) {
    championModel.findAll().then((champion) => res.json(champion));
  }
}

export default new ChampionController();
