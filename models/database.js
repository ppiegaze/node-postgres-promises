const promise = require('bluebird');
const options = {promiseLib: promise};
const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
const client = new pgp.Client(connectionString);
client.connect();
const query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });