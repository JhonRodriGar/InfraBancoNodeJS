// En este archivo irán definidos los paths de los ddiferentes endpoints de esta API
const { response } = require('express');
const express = require('express');
const CustomerController = require('../controllers/CustomerController')
const AccountController = require('../controllers/AccountController');
const { retirar } = require('../services/AccountService');

const router = express.Router();
//El objeto router es aquel donde se definirán los path y se asocian con los controladores.

router.delete('/customers/:id', CustomerController.delete); //Path para eliminar cliente. Se define el path del endpoint asociandolo con la función que se creó en el controller
//A través del objeto router se define que se va a crear un endpoint DELETE con el path /customers/:id apuntado al método delete del módulo CustomerController, el pathparams se define con :id
router.put('/customers/:id', CustomerController.edit); //Path para editar cliente
router.get('/customers/:id/accounts', AccountController.listAccountsByCustomer); //Path para listar las cuentas de un cliente. router.get implementa el verbo get
router.post('/accounts', AccountController.createAccount); //Path para crear cuenta
router.post('/customers', CustomerController.createCustomer); //Path para crear cliente
router.delete('/accounts/:id', AccountController.delete); //Path para eliminar cuenta.
router.put('/accounts/:id/retirar', AccountController.retirar); //Path para retirar
router.put('/accounts/:id/consignar', AccountController.consignar); //Path para consignar
router.put('/accounts/transferir', AccountController.transferir); //Path para transferir


module.exports = router;
