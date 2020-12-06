const { DataTypes } = require('sequelize');

import sequelize from '../database/sequelize';
import User from './user';
import Match from './match';
import Champion from './td_champion';

const Ban = sequelize.define(
  'ban',
  {
    idban: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idchampion: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Champion,
        key: 'idchampion',
        //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
    },
    idmatch: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Match,
        key: 'idmatch',
        //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
    },
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'iduser',
        //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Ban;
