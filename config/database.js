const { Pool } = require("pg");
const pool = new Pool();

pool.connect((err) => {
  err ? console.error(err) : console.log(`Banco OK (${process.env.PGPORT})`);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
