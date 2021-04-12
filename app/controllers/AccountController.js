const AccountController = module.exports
//Importando el módulo de la lógica
const AccountService = require('../services/AccountService');

//GET /customer/:id/accounts donde :id es el path param
AccountController.listAccountsByCustomer = async (req, res, next) => {
    const params = req.params;

    try {
        const response = await AccountService.listAccountsByCustomer(params.id)

        //Enviando respuesta al cliente que retorna la lógica
        res.send(response) //se toma lo que responde la logica y se envía como respuesta
        //--------------------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.createAccount = async (req, res, next) => {
    const body = req.body;

    try {
        await AccountService.create(body)
        res.send({message: 'account created'})
        //------------------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}


AccountController.delete = async (req, res, next) => {
    const params = req.params;

    try {
        await AccountService.delete(params.id)
        res.send({message: 'Account deleted'})
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.retirar = async (req, res, next) => {
    const params = req.params;
    const body = req.body; //Extrayendo el body de la petición

    try {
        await AccountService.retirar(params.id, body)
        res.send({message: 'amount withdrawn'}) //Monto retirado
        //---------------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.consignar = async (req, res, next) => {
    const params = req.params;
    const body = req.body; //Extrayendo el body de la petición

    try {
        await AccountService.consignar(params.id, body)
        res.send({message: 'Amount consigned'}) //Monto consignado
        //---------------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.transferir = async (req, res, next) => {
    const body = req.body;

    try {
        await AccountService.transferir(body)
        res.send({message: 'Successful transfer'}) //Mensaje de transferencia exitosa
        //------------------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}