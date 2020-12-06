const { DataTypes } = require('sequelize');

import sequelize from '../database/sequelize';

const Profile = sequelize.define(
  'profile',
  {
    idprofile: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gamename: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45],
      },
    },
    puuid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100],
      },
    },
    tagline: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 5],
      },
    },
    idsummoner: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100],
      },
    },
    idaccount: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100],
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Profile;
