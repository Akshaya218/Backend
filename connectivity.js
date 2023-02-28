const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "aggu218",
  connectionString: "postgres://postgres:aggu218@localhost:5432/postgres",
  //ssl: true
});

module.exports = client;
