var pg = require('pg');
var connection = 'postgres://ojulqibpjolysj:e0def9bb9ffb4011b0729375974b9d3cb7a1da98d2f3e638ebbad4481db4218f@ec2-174-129-41-64.compute-1.amazonaws.com:5432/d3339k2hhnnkso';

function createDBConnection() {
    return new pg.Client(connection).connect();
}

module.exports = function() {
    return createDBConnection;
} 