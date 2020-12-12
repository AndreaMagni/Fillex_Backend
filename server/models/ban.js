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
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'iduser',
      },
    },
    idchampion: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Champion,
        key: 'idchampion',
      },
    },
    idmatch: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Match,
        key: 'idmatch',
      },
    },
    isactive: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
    },
    date: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Ban;
