const promesa1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Primera promesa resuelta",5);
      resolve(5);
    }, 1000);
  });
};

const promesa2 = (valor) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = valor * 2;
      console.log("Segunda promesa, mostrar resultado:", resultado);
      resolve(resultado);
    }, 3000);
  });
};

const promesa3 = (valor) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = valor + 10;
      console.log("Tercera promesa, mostrar resultado:", resultado);
      resolve(resultado);
    }, 5000);
  });
};

// Encadenamos las promesas
promesa1().then((valor1) => {
    return promesa2(valor1);
  }).then((valor2) => {
    return promesa3(valor2);
  }).then((valor3) => {
    console.log("Valor final después de encadenar promesas es: ", valor3);
  });

  