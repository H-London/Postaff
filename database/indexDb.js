const Sequelize = require("sequelize");
// const DBAuth = require("./config.js");
const dotenv = require('dotenv').config();

const sequelize = new Sequelize('postaff', "root", null, {
    host: 'localhost',
    dialect: 'mysql',
})

sequelize
  .authenticate()
  .then(() => {
    console.log('🚀🚀🚀 Connection has been established successfully.🚀🚀🚀');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports.sequelize = sequelize;
