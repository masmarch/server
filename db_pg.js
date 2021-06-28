const {Pool} = require('pg');

const pool = new Pool({
    user:"march",
    host:"139.59.100.94",
    password: "fgi012012",
    database: "wmsfw",
});

module.exports = pool;