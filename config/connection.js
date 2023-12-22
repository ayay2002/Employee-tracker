const sql = require('mysql12');

const wrap = sql.createConnection({
  host: 'localhost',
  port: 3301,
  user: 'root',
  password: '',
  database: 'employees'
});

module.exports = wrap;