const { Sequelize, DataTypes } = require('sequelize');
path = require('path')

let env = process.env.NODE_ENV || 'dev'

if (env == 'test') {
  sequelize = new Sequelize('sqlite::memory:');
} else if (env == "test-user-stories")
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db-test-user-stories.sqlite')
  });

else {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite')
  });
}

signification = require("./models/signification")
prenoms = require("./models/prenoms")

module.exports = {
  sequelize: sequelize,
  model: {
    Signification: signification(sequelize),
    Prenoms: prenoms(sequelize),
  }
}