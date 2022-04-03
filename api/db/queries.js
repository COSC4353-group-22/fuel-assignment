const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'fuel_database',
  password: 'password',
  port: 5432,
}); 

module.exports = pool; 