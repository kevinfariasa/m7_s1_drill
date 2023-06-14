/*Forma del exercise del pdf 
const {
    Pool
} = require('pg'); */ 

import pg from 'pg';
const {Pool} = pg;

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'practica_db',
    user: 'node_user',
    password: 'node',
});

pool.query('SELECT NOW()', (err, res) =>{
    console.log(err, res);
    pool.end();
});