import pg from 'pg';
const { Client, Pool } = pg;

const connectionString = 'postgresql://node_user:node@localhost:5432/practica_db'; //URI

const client = new Client({
    connectionString,
});
client.connect();
client.query('SELECT NOW()', (err, res)=>{
    console.log(err, res);
    client.end();
});

const pool = new Pool({
    connectionString,
});
pool.query('SELECT NOW()', (err, res)=>{
    console.log(err, res);
    pool.end
});


