const miFuncion = (texto) => {
    let resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    const vocales = "aeiou";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase();

        if (vocales.includes(letra)) {
            resultado[letra]++;
        }
    }

    return resultado;
};

const palabra = "euforia";
let obj = miFuncion(palabra);
console.log(obj);

console.log("Hola mundo");
