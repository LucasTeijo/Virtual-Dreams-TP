

var request = require('request-promise');

var options = {
    method: 'GET',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    body: {
        some: 'payload'
    },
    dataType: 'json',
    json: true
};
/*
request(options)
    .then(data => console.log(data));*/
    /*
    request(options)
    .then(data => {var personas = JSON.parse(this.data)
                    for (const persona in personas) {
                        console.log(persona.apellido);
                    }});

                    */


    
request(options)
    .then(data => {for (const persona in data) {
        console.log(persona.apellido);
    }});




