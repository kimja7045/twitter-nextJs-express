const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'luke',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'luke',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.AWS_ADDRESS,
    dialect: 'mysql',
  },
};
