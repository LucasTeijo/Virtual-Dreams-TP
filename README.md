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

 
 
Tuve que realizarlo una segunda vez porque accidentalmente perdí la imagen del primer POST, y para que coincidiera el código opte por volver a realizarlo, por ese motivo se ve que estoy 2 veces cargado


EJERCICIO 4

Para ejecutar este programa se debe descargar el archivo mostrarPersonas.js. Luego se accede a la consola en la carpeta donde se encuentre el archivo y se ejecuta el comando “node mostrarPersonas.js” para correr el programa.
Al realizar este ejercicio tuve un problema a la hora de tomar correctamente los datos de la url. Mi intención era acceder a los valores de los atributos de cada JSON y mostrar eso por consola, pero todas las maneras que se me ocurrieron o que pude investigar para resolver eso no funcionaban, o me daban un error, por lo que simplemente muestro todo el contenido tal cual se ve dentro de la página.

EJERCICIO 5/6

Para ejecutar este programa se debe descargar los archivos crearPersonas.html y server.js. Dentro de server.js se debe realizar una modificación en la línea 17, se debe ingresar el path donde se va a encontrar el archivo crearPersonas.html, ya que no encontré otra manera de acceder a él.  Una vez hecho esto se debe ingresar desde la consola a la carpeta que contenga el archivo server.js y ejecutar el comando “node server.js”, esto hará que se inicie el servidor. Con el servidor funcionando, se debe ingresar desde el navegador al a localhost:3000 para acceder a él. Ahí mismo cargamos los datos y se envían a la url.

Estos ejercicios los resolví de manera simultanea ya que fue la manera más fácil que pude pensar para resolver el 5. Esto me trajo una problemática a la hora de hacer las validaciones, ya que como el HTML solo aceptaba enviar 3 atributos no valide por mayor cantidad, ni valide que el nombre y apellido sean Strings ya que el input reconoce todo como string. Otra complicación que tuve fue a la hora de mostrar los errores por pantalla, no pude encontrar la manera de darle un mensaje al usuario de que no se puede enviar dado que no cumple los requisitos de los datos, en su defecto realice un console.log con los mensajes, y en caso de que ocurra uno de estos casos, no se realiza un POST al url.

