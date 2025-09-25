const miFuncion = (texto) =>{
    let invertida = "";
    for (let i = texto.length-1; i>=0; i--){
        invertida += texto[i];
    }
    return texto === invertida;
}
let band = miFuncion("oruro");
console.log(band)

 band = miFuncion("hola");
console.log(band)

