const { DataTypes } = require('sequelize');

import sequelize from '../database/sequelize';

const User = sequelize.define('User', {
  
    iduser: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastlogin: {
        type: DataTypes.TIME
    },
    password: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

export default User;