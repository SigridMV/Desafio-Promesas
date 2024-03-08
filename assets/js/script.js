// Implementar ES6 para toda la estructura del código.
// Crear una función asíncrona para obtener los datos de la URL.
const getDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";

  //Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await
  //para recibir el valor directamente de la promesa.
  try {
    const response = await fetch(url);

    const data = await response.json();

    //Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar
    //solamente los primeros 20 títulos de los datos recibidos.
    data.forEach((elemento) => {
      if (elemento.id <= 20) {
        console.log(elemento.title);
      }
    });

    await enviarMensaje();

  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

// Crear una función que retorne una promesa después de tres (3) segundos utilizando
// setTimeout. El mensaje a retornar debe ser un string que indique: “Información Enviada”
const enviarMensaje = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Información Enviada.");
    }, 3000);
  });
};

// Crear una función asíncrona que permita recibir el mensaje de la promesa creada en
//el requerimiento cinco
const recibirMensaje = async () => {
  try {
    const mensaje = await enviarMensaje();
    console.log(mensaje);
  } catch (error) {
    console.error("Error al recibir el mensaje:", error);
  }
};

getDatos();
