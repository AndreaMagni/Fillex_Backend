const { DataTypes } = require('sequelize');

import sequelize from '../database/sequelize';

const User = sequelize.define(
  'user',
  {
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    lastlogin: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default User;
