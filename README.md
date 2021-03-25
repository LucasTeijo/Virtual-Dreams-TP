# Virtual-Dreams-TP

EJERCICIO 2

¿Qué es un servidor HTTP? 
Un servidor HTTP es un software que, mediante conexiones con el cliente, procesa una aplicación desde el lado del servidor. El navegador web es el encargado de renderizar el código recibido por el cliente. Este tipo de servidor utiliza el Hypertext Tranfer Protocol o Protocolo de Transferencia de Hipertexto. 

¿Qué son los verbos HTTP? Mencionar los más conocidos
Un verbo HTTP es un método de petición que se utiliza para indicar que acción se le debe aplicar a cierto recurso. Dentro de estos verbos los conocidos son GET, POST, PUT, DELETE.

¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?
Un request se puede definir como un mensaje enviado por el cliente. Es quien inicia una acción en el servidor. Un response es la respuesta que da el servidor ante un request. 
Las cabeceras son los parámetros que se envían en un request o response para proporcionar información esencial sobre la transacción en curso.

¿Qué es un queryString? (En el contexto de una url)
Un queryString es la parte de una url que contiene los datos que deben pasar a las aplicaciones web.

¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?

El responseCode es un código de 3 dígitos que surge como respuesta a un request HTTP. Las respuestas posibles se agrupan en 5 clases:
•	Respuestas informativas (100-199)
•	Respuestas satisfactorias (200-299)
•	Redirecciones (300-399)
•	Errores de los clientes (400-499)
•	Errores de los servidores (500-599)

¿Cómo se envía data en un Get y cómo en un POST?

El método GET envía información del usuario codificada en el header HTTP, directamente en la URL, mientras que el método post la envía a través del body del HTTP request, por lo que no aparece en la URL.

¿Qué verbo http utiliza el navegador cuando accedemos a una página?

Cada vez que accedemos a una pagina desde el navegador se utiliza el verbo GET.


Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.

JSON (JavaScript Object Notation) es un formato para representar datos estructurados en la sintaxis de objetos de JavaScript. Se utiliza comúnmente para transmitir datos en aplicaciones web. Ejemplo:

{
	“name”: “Lucas”,
	“age”: 23
}

XML (Extensible Markup Language) es un lenguaje de marcado, simplificado y adaptado a internet. Sirve para representar información estructurada en la web. Ejemplo:

<persona> //nombre del elemento
	<nombre>Lucas</nombre> //atributo
	<edad>23</edad> //atributo
</persona> //etiqueta de fin


Explicar brevemente el estándar SOAP

Protocolo de simple acceso a objetos (SOAP) es un protocolo estándar que define como dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML.

Explicar brevemente el estándar REST Full

Rest es un modelo de arquitectura web basado en HTTP para mejorar las comunicaciones cliente-servidor. Se puede definir a REST como cualquier interfaz entre sistemas que use HTTP para obtener datos o generar operaciones sobre los mismos en todos los formatos posibles, como JSON y XML. Restful es un servicio web que implementa REST.

¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Dentro de un request, un header es toda la información necesaria del cliente que el servidor necesita para ejecutar un response.
Content-type se utiliza para indicar que tipo de contenido será retornado.



EJERCICIO 3
 

![image](https://user-images.githubusercontent.com/54475564/112476601-d7104580-8d50-11eb-8286-7724391a3b65.png)

![image](https://user-images.githubusercontent.com/54475564/112476676-ec856f80-8d50-11eb-9b05-1c67c7392a4c.png)

![image](https://user-images.githubusercontent.com/54475564/112476703-f313e700-8d50-11eb-9abc-59bc6bb33f40.png)

 
 
(Tuve que realizarlo una segunda vez porque accidentalmente perdí la imagen del primer POST, y para que coincidiera el código opte por volver a realizarlo, por ese motivo se ve que estoy 2 veces cargado)

