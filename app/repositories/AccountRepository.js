const AccountRepository = module.exports
const DB = require('../config/database')

AccountRepository.create = (account) => {
    return DB('accounts').insert(account)
}

AccountRepository.listAccountsByCustomer = (customerId) => {
    return DB ('accounts').where({customerid : customerId}).select('*')
}

AccountRepository.delete = (idcuenta) => {
    return DB('accounts').where( {id: idcuenta }).delete()
}


AccountRepository.findById = (idcuenta) => {
    return DB('accounts').where({id: idcuenta }).select('*')
}

AccountRepository.edit = (idcuenta, account) => {
    return DB('accounts').where( {id: idcuenta }).update(account)
}