import profileModel from '../../../models/profile';

export class ProfileController {
  all(req, res) {
    profileModel.findAll().then((profile) => res.json(profile));
  }
}

export default new ProfileController();
