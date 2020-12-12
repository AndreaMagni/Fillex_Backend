import userModel from './user';
import banModel from './ban';

const associations = () => {
  userModel.hasMany(banModel, {
    as: 'bans',
    foreignKey: 'iduser',
    sourceKey: 'iduser',
  });

  banModel.belongsTo(userModel, {
    foreignKey: 'iduser',
  });
};

export default associations;
