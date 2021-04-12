const CustomerService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository') //Se está immportando el CustomerRepository en el service para usarlo
const AccountRepository = require('../repositories/AccountRepository') //Se importa para buscar las cuentas de un cliente ya que no se puede eliminar si tiene cuentas

CustomerService.create = async (customer) => {
    //Buscamos el cliente por el id para verificar si existe
    const customerFound = await CustomerRepository.findById(customer.id)

    //Si la lista de resultado su tamaño es mayor que cero es porque existe un cliente con esa cédula
    if(customerFound.length > 0){
        throw new Error('Customer already exist')
    }

    //Si no se cumple lo anterior entonces se crea el cliente
    await CustomerRepository.create(customer)
}

CustomerService.edit = async (id, customer) => {
    //Buscamos el cliente por el id para verificar si existe
    const customerFound = await CustomerRepository.findById(id)

    //Si la lista de resultado su tamaño es cero es porque no existe un cliente con esa cédula
    if(customerFound.length === 0){
        throw new Error('Customer does not exist')
    }

    //Se actualiza el cliente
    await CustomerRepository.edit(id, customer)
}

CustomerService.delete = async (idCustomer) => {
    //Se consulta las cuentas del cliente, se usa await porque debemos esperar el resultado para poder seguir
    const customerAccounts = await AccountRepository.listAccountsByCustomer(idCustomer)

    //Si el tamaño de la lista es mayor que 0 es porque tiene cuentas y se debe lanzar la excepción
    if (customerAccounts.length > 0) {
        throw new Error('Customer with accounts, can not be deleted')
    }

    //Si no se cumple la anterior condición entonces se elimina el cliente
    await CustomerRepository.delete(idCustomer)
}

CustomerService.findCustomer = async (idCustomer) => {
    const customers = await CustomerRepository.findById(idCustomer)

    if (customers.length === 0) return undefined; //Si la lista está vacía se retorna undefines (como null)

    return customers[0]; //Si hay elementos en la lista entonces retorna el primero
}
