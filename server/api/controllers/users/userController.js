import userModel from '../../../models/user';

export class UserController {
  all(req, res) {
    userModel.findAll().then((userzzzz) => res.json(userzzzz));
  }
}

export default new UserController();
