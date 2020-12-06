const { DataTypes } = require('sequelize');

import sequelize from '../database/sequelize';

const Champion = sequelize.define(
  'td_champion',
  {
    idchampion: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45],
      },
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Champion;
