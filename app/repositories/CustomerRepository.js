//La estructura basica de un modulo en java script es la siguiente:
const CustomerRepository = module.exports
//Aca se esta indicando que este objeto (CustomerRepository) estará disponible fuera de este archivo, esto lo determina module.exports.
//CustomerRepository es un objeto sobre el cual se implementaran las funciones como miembros de ese objeto.
//Para crear una funcion a este objeto se usa la notacion flecha
const DB = require('../config/database') //Se importa el módulo knex definido en el archivo database.js

CustomerRepository.create = (customer) => {
    //Aqui al objeto CustomerRepository se le está creando un atributo create que es una funcion que recibe por parámetro un objeto customer.
    //En javascript no se especifican los tipos de datos a los identificadores.
    //El contenido que esté dentro de { } será lo que haga la funcion.

    return DB('customers').insert(customer)
    //DB: es el objeto a través del cual se accede a la BD. DB(‘customer’) indica que todas las operaciones se harán sobre la tabla customer.
    //insert(customer): inserta el objeto customer en la tabla ‘customer’.
    //Este objeto debe tener atributos que sean iguales a los nombres de las tablas.
}

CustomerRepository.findById = (cedula) => {
    return DB('customers').where({id: cedula }).select('*') //id es el nombre de la columna en la BD

    //where( { id: cedula }) indica el where que se está haciendo en la sentencia sql resultante; where id = cedula.
    //Por ejemplo si se quisiera hacer where id = cedula AND name = ‘camilo’ seria: where({id: cedula, name: ‘camilo’}).
    //select(*): indica que se quieren todas las columnas.
}

CustomerRepository.edit = (cedula, customer) => {
    return DB('customers').where( {id: cedula }).update(customer)

    //update(customer): aca se estan actualizando todos los atributos que lleguen en el objeto customer,
    //con este objeto se arman los set de la consulta, si por ejemplo el objeto
    //customer fuera {lastname: ‘quitian’, name: ‘claudia’} y la cedula tuviera el valor de ‘1234’,
    //la consulta quedaria: update customers set lastname=’quitian’,name=’claudia’ where id=’1234’
}

CustomerRepository.delete = (cedula) => {
    return DB('customers').where( {id: cedula }).delete()

    //del(): invoca el delete from de la tabla definida en DB.
}