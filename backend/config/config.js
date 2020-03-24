const path = require('path'); // Lets us use __dirname as the relative filepath from this file
require('dotenv').config(path.join(__dirname, '../../.env'));
console.log(process.env.MYSQL_USER);

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'atilegodos_dev',
    details: {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql'
    }
  },
  test: {
    // use_env_variable: 'TEST_DATABASE_URL', //add this back if I try to use the coverage tests in CI again
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'atilegodos_test',
    details: {
      host: '127.0.0.1', // use 'localhost' if go back to using this step in CI
      port: 3306,
      dialect: 'mysql'
    }
  },
  production: {
    use_env_variable: 'JAWSDB_URL',

    details: {
      host: 'u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      username: 'oku92haxwe074gx6',
      password: 'pt7uvw59en726iba',
      database: 'pg69vfez19z9ktej',
      port: 3306,
      dialect: 'mysql'
    }
  }
};
