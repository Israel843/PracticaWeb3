//Función estilo callback 
const esperar = (ms, callback) => {
  setTimeout(() => {
    callback(null, `Esperado ${ms} milisegundos`);
  }, ms);
};

// Convertir función de callback a promesa
const esperarPromesa = (ms) => {
  return new Promise((resolve, reject) => {
    esperar(ms, (err, resultado) => {
      if (err) {
        reject(err);
      } 
      else {
        resolve(resultado);
      }
    });
  });
};

// Usando la función con promesa
esperarPromesa(2000).then((mensaje) => {
    console.log("Exito: ", mensaje);
  }).catch((err) => {
    console.error("Error:", err);
  });

  