const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fillex', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

export default sequelize;
