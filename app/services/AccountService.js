const AccountService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountRepository')

AccountService.listAccountsByCustomer = async (customerId) => {
    //Buscamos el cliente por id para ver si existe
    const customerFound = await CustomerRepository.findById(customerId)

    //Si el tamaño de la lista es 0 es porque no existe un cliente con esa cédula
    if(customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    //Cuando se retorna directamente el resultado de una función que haya que esperar el resultado, no es necesario utilizar await
    return AccountRepository.listAccountsByCustomer(customerId)
}

AccountService.create = async (account) => {
    //Buscamos el cliente por id para ver si existe
    const customerFound = await CustomerRepository.findById(account.customerid)

    //Si el tamaño de la lista es 0 es porque no existe un cliente con esa cédula
    if(customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    //Consultamos las cuentas del cliente, el id del cliente viene del objeto account
    const accountsByCustomer = await AccountRepository.listAccountsByCustomer(account.customerid)

    //Verificamos que solo tenga hasta tres cuentas
    if (accountsByCustomer.length >= 3) {
        throw new Error('No more than 3 accounts')
    }

    account.openedat = new Date(); //Colocando la fecha de apertura como hoy automáticamente
    account.amount = 0; //Colocando el saldo inicial
    await AccountRepository.create(account)
}


AccountService.delete = async (idAccount) => {
    const accountDB = await AccountRepository.findById(idAccount)

    if(accountDB.length === 0) {
        throw new Error('Account does not exist')
    }

    console.log(accountDB[0].amount)

    if(accountDB[0].amount > 0) {
        throw new Error('Account with amount, can not be deleted')
    }

    await AccountRepository.delete(idAccount)
}

AccountService.retirar = async (idcuenta, account) => {
    const accountFound = await AccountRepository.findById(idcuenta) //Busca la cuenta por el id para ver si existe

    if(accountFound.length === 0){
        throw new Error('Account does not exist')
    }

    console.log(accountFound) //Revisa cuál es el monto que hay en la base de datos 
    console.log(account.amount) //Revisa el monto que se va a retirar

    if(accountFound[0].amount < account.amount) { //Revisa si la cuenta tien saldo suficiente
        throw new Error('The account does not have enough balance') //Muestra mensaje si la cuenta no tiene saldo suficiente
    }

    accountFound[0].amount = accountFound[0].amount - account.amount; //Al monto que hay en la base de datos le resta lo que va a retirar

    console.log('El nuevo monto de la BD será ' + accountFound[0].amount)

    await AccountRepository.edit(idcuenta, accountFound[0]) //Le envía al repositorio los datos actualizados
}

AccountService.consignar = async (idcuenta, account) => {
    const accountFound = await AccountRepository.findById(idcuenta) //Busca la cuenta por el id para ver si existe

    if(accountFound.length === 0){
        throw new Error('Account does not exist')
    }

    console.log(accountFound) //Revisa cuál es el monto que hay en la base de datos 
    console.log(account.amount) //Revisa el monto que se va a consignar

    accountFound[0].amount = (accountFound[0].amount) + parseInt((account.amount)); //Al monto que hay en la base de datos le suma lo que va a consignar

    console.log('El nuevo monto de la BD será ' + accountFound[0].amount) //Verifica que no esté concatenando sino sumando

    await AccountRepository.edit(idcuenta, accountFound[0]) //Le envía al repositorio los datos actualizados
}

AccountService.transferir = async (datosTransferencia) => {
    const accountFoundOrigen = await AccountRepository.findById(datosTransferencia.ctaOrigen) //Busca la cuenta por el id para ver si existe la cuenta de origen
    const accountFoundDestino = await AccountRepository.findById(datosTransferencia.ctaDestino) //Busca la cuenta por el id para ver si existe la cuenta de destino

    if(accountFoundOrigen.length === 0){
        throw new Error('Origin account does not exist') //Muestra mensaje si la cuenta de origen no existe
    }

    if(accountFoundDestino.length === 0){
        throw new Error('Destination account does not exist') //Muestra mensaje si la cuenta de destino no existe
    }

    if(accountFoundOrigen[0].amount < datosTransferencia.monto) {
        throw new Error('The origin account does not have enough balance') //Muestra mensaje si la cuenta de origen no tiene saldo suficiente
    }

    accountFoundOrigen[0].amount = accountFoundOrigen[0].amount - datosTransferencia.monto; //Al monto que hay en la base de datos le resta lo que va a transferir
    accountFoundDestino[0].amount = accountFoundDestino[0].amount + parseInt(datosTransferencia.monto); //Al monto que hay en la base de datos le suma lo que va a recibir por transferencia

    await AccountRepository.edit(datosTransferencia.ctaOrigen, accountFoundOrigen[0]) //Le envía al repositorio los datos actualizados para la cuenta de origen
    await AccountRepository.edit(datosTransferencia.ctaDestino, accountFoundDestino[0]) //Le envía al repositorio los datos actualizados para la cuenta de destino
}