var pg = require('pg');
var connection = process.env.DATABASE_URL;
const client = new pg.Client(connection);

function createDBConnection() {
    return client.connect();
}

module.exports = function() {
    return createDBConnection;
} 