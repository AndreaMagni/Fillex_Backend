const { DataTypes } = require('sequelize');

import sequelize from '../database/sequelize';

const Match = sequelize.define(
  'match',
  {
    idmatch: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Match;
