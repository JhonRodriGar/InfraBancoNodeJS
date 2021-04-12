//Este archivo es sólo para realizar pruebas al funcionamiento del programa
//Importando el repositorio
const { any } = require('async')
const ClienteRepository = require('./app/repositories/CustomerRepository')
const AccountRepository = require('./app/repositories/AccountRepository')

//Importo el service
const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')

console.log('Probando....')

/*
ClienteRepository.create({
    name: 'Jhon',
    lastname: 'Rodríguez',
    id: '4321',
    email: 'jhon@mail.com'
}).then(console.log) //Para que el programa espere a que la operación termine


async function probandoElBuscar() {
    const cliente = await ClienteRepository.findById('4321')
    console.log(cliente)
}

probandoElBuscar()
.then(console.log('OK')) //Para que el programa espere a que la operación termine

//async, siempre que haya un await dentro de una función, la función debe llevar async
async function probandoElEditar(){
    //await es para que node.js espere que termine la ejecución antes de pasar a la siguiente instrucción
    await ClienteRepository.edit('4321',{
        name: 'Ramira',
        lastname: 'Pérez',
    })
}

probandoElEditar()
.then(console.log('OK')) //Para que el programa espere a que la operación termine


async function probandoEliminar(){
    await ClienteRepository.delete('4321')
}

probandoEliminar()
.then(console.log('OK'))

//PRUEBAS AL AccountRepository

AccountRepository.create({
    id: '107',
    amount: '7000',
    customerid: '2',
    openedat: '2021-03-28'
}).then(console.log) 



async function probandoListarCuentas() {
    const list = await AccountRepository.listAccountsByCustomer('1')
    console.log(list)
}

probandoListarCuentas()
.then(console.log('OK')) //Primero muestra el OK y después la lista, revisar


async function probandoEliminarCuenta(){
    await AccountRepository.delete('107')
}

probandoEliminarCuenta()
.then(console.log('OK, Cuenta eliminada'))



//PRUEBAS AL CustomerService

async function probarCrearCliente() {
    await CustomerService.create({
        id: '2345',
        lastname: 'Ramírez',
        name: 'Jericundio',
        email: 'jeriqmail.com'
    })
}

probarCrearCliente().then(console.log('OK'))


async function probarEditar(){
    await CustomerService.edit('2345444', {
        lastname: 'Santos',
        name: 'Anacleta',
    })
}

probarEditar().then(console.log('OK'))


async function probarEliminar() {
    await CustomerService.delete('1')
}

probarEliminar().then(console.log('OK'))


async function probarBuscar () {
    const customer = await CustomerService.findCustomer('10')
    console.log(customer)
}

probarBuscar().then(console.log('OK'))


async function probar() {
    const result = await AccountService.listAccountsByCustomer('10')
    console.log(result)
}

probar().then(console.log('OK'))

*/

async function probar() {
    const result = await AccountService.create({
        id: '43645',
        customerid: '2',
    })
    console.log(result)
}

probar().then(console.log('OK'))