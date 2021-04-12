//Para acceder a la BD se usara el framework knex( http://knexjs.org ) que sirve como ORM
//(object-relationship mapping) que se encarga de convertir los objetos json a sentencias SQL.

//Se configura el acceso a la BD

const knex = require('knex');

module.exports = knex({
    client: 'pg', //Indica que se usará para postgres como motor de la BD
    connection: 'postgres://postgres:0620Jhon@localhost:5432/mibanco', //Cadena de conexión
    //postgres: es la BD. postgres: Es el usuario de la BD. 0620Jhon: Es la contraseña de la BD. localhost: Es el host. 5432: Es el puerto. mibanco: Es el nombre de la BD 
    pool: {min: 1, max: 2},
    acquireConnectionTimeout: 5000,
});