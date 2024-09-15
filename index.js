

const {Client} = require("pg");

const sql = new Client({

connectionString:process.env.CONNECTION_STRING;

});

sql.connect(
