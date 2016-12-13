const MongoClient = require('mongodb').MongoClient;
const CONFIG = require('../config');

const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(CONFIG.mongoURL)
      .then(db => resolve(db))
      .catch(err => console.log(err));
  });
};

module.exports = connectToMongo;
