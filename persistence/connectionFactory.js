var pg = require('pg');
var connection = process.env.DATABASE_URL;

function createDBConnection() {
    return new pg.Client(connection);
}

module.exports = function() {
    return createDBConnection;
} 