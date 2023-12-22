const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:pass@localhost:3306/mydb');

const User = sequelize.define('User', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = User;