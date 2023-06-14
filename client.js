import pg from 'pg';

const { Client } = pg;

const config = {
    host: 'localhost',
    port: 5432,
    database: 'practica_db',
    user: 'node_user',
    password: 'node',
};

const consulta = () => {
    return new Promise(async (resolve, reject) => {
        const cliente = new Client(config);
        try {
            await cliente.connect();
            const resultado = await cliente.query(query);
            resolve(resultado.rows);
        } catch (error) {
            reject('Error al conectar: ' + error); 
        } finally {
            try {
                cliente.end();
            } catch (error) {
                console.log('Error al finalizar');
            }
        }
    });
};

const query = {
    text: 'SELECT id, nombres, apellidos, edad, nro_identificacion FROM estudiantes',
    values: [],
};

consulta(query)
    .then((resultado) => {
        console.table(resultado);
    })
    .catch((error) => {
        console.error('Error en la consulta:', error);
});
