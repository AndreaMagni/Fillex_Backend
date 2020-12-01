const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fillex', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

export default sequelize;

//sequelize.authenticate().then(res => {l.info(`Connessione ok`)}).catch(err => l.info(`Errore connessione ${err.toString()}`)); // Utile per testing ma non serve ad altro