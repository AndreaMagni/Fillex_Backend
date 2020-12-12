import banModel from '../../../models/ban';
import l from '../../../common/logger';

export class BanController {
  all(req, res) {
    banModel.findAll().then((ban) => res.json(ban));
  }

  create(req, res) {
    banModel
      .create(req.body)
      // eslint-disable-next-line no-unused-vars
      .then((_) => res.status(200).send('Ban inserito correttamente'))
      .catch((err) => {
        l.error(err);
        return res.status(500).send('Errore inserimento');
      });
  }

  /*
  create(req, res) {
    ExamplesService.create(req.body.name).then((r) =>
      res.status(201).location(`/api/v1/examples/${r.id}`).json(r)
    );
  }
  */
}

export default new BanController();
