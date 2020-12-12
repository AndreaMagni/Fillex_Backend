import userModel from '../../../models/user';
import banModel from '../../../models/ban';

export class UserController {
  all(req, res) {
    userModel
      .findAll({ include: { model: banModel, as: 'bans' } })
      .then((userzzzz) => res.json(userzzzz));
  }
}

export default new UserController();
