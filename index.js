

const {Client} = require("pg");

const sql = new Client({

connectionString:CONNECTION_STRING

});

sql.connect();
