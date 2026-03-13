require('dotenv').config();
module.exports = {
  dbPath: process.env.DB_PATH,
  port: process.env.PORT
};