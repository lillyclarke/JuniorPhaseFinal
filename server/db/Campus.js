const Sequelize = require('sequelize');
const db = require('./db');

const Campus = db.define('Campus', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.fillmurray.com/300/300',
  },
  address: {
    type: Sequelize.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Campus;
