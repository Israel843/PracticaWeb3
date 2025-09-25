// Función que devuelve una promesa
const obtenerDatos = () => {
  let promesa;
  let exito = True; //False

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve("Datos obtenidos correctamente");
      } else {
        reject("Error al obtener datos");
      }
    }, 1000);
  });

  return promesa;
};

// Función que convierte una promesa en callback-style
const promisifyToCallback = (promesa, callback) => {
  promesa
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

// Llamada correcta
promisifyToCallback(obtenerDatos(), (err, res) => {
  if (err) {
    console.error("Error:", err);
  } 
  else {
    console.log("Resultado:", res);
  }
});

