const CustomerController = module.exports
//Importando el módulo de la lógica
const CustomerService = require('../services/CustomerService');

//Los parámetros req, res y next siempre son requeridos para el correcto funcionamiento del controlador,
//acá no va definido el path, se hace en otra parte.

//La función recibe tres parámetros. El req es la petición, el res es por donde se envía la respuesta,
//y el next es para propagar los errores a otros componentes de nodejs(no se profundizará en eso aqui)
//Como el delete de customerService no retorna nada, se quiere retornar (res.send - linea 18) un
//mensaje en json que diga que la operación fue exitosa

CustomerController.delete = async (req, res, next) => {
    //Extrayendo los PathParam de la petición
    const params = req.params;

    try {
        //Se supone que el id llega así: /customers/:id (acá no es con {} sino con : )
        //await (ya que el método es async) para esperar que termine.
        await CustomerService.delete(params.id)

        //Enviando respuesta al cliente (Postam por ejemplo)
        res.send({message: 'customer deleted'})
        //------------------------------
    } catch (error) { //Manejando las excepciones
        console.log({error});
        //Retornando al cliente (Postam por ejemplo) el error.
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

//PUT /customers/:id Body: datos a editar
CustomerController.edit = async (req, res, next) => {
    const params = req.params;
    //Extrayendo el body de la petición
    const body = req.body; //para acceder al body del request se hace un req.body donde req es   uno de los parámetros del controlador.

    try {
        await CustomerService.edit(params.id, body)

        res.send({message: 'customer updated'}) //Este endpoint retorna un mensaje informativo
        //--------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}


CustomerController.createCustomer = async (req, res, next) => {
    const body = req.body;

    try {
        await CustomerService.create(body)
        res.send({message: 'Customer created'})
        //-----------------------------
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}