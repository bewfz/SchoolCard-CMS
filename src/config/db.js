const knex = require('knex');

const db = knex({
  client: 'mariadb',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'your_database_name'
  }
});

module.exports = db;