
const http = require("http");
const express = require("express");
const request = require('request');


const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);

server.listen(3000);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendFile("C:/Users/Lucas/Documents/Ejercicio 5-6/crearPersonas.html");
  });

app.post('/submit',(request, response) => validar(request, response));

function validar(req, res) {
   
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var dni = req.body.dni;
    
    var data = {
        nombre: nombre,
        apellido: apellido,
        dni: dni
    }

    if(apellido == "" || dni == ""){
        console.log("Se debe ingresar obligatoriamente los datos de apellido y DNI");
        return;
    }

    if(dni.toString().length > 10){
        console.log("El DNI no puede tener mas de 10 caracteres");
        return;
    }
    upload(data);

}

function upload(data) {
    var options = {
        uri: "https://reclutamiento-14cf7.firebaseio.com/personas.json",
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    request(options, function (error, response) {
        console.log(error, response.body);
        return;
    });
    
}