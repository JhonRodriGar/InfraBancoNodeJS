//Creando index.js
//El index.js es el main del proyecto, es el archivo de entrada del proceso de nodejs sobre el cual
//correrá la aplicación, en este se crea el servidor de express (la dependencia que agregamos al proyecto)
//se asigna un puerto al servidor y se definen las rutas de los controladores(de forma indirecta)

const express = require('express'); //Importando librería
const routes = require('./app/controllers/routes') //Para definir el path inicial de todos los endpoints

const app = express (); //Creando servidor
app.use(express.json()) //Configuramos el servidor para el envío y recepción de json

const PORT = 3000;

app.use('/banco', routes); //Para definir el path inicial de todos los endpoints

//Corriendo el servidor
app.listen(PORT, () => {
    console.log('Escuchando puerto:', PORT);
})