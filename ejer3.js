const miFuncion = (numeros)=>{
    let resultado ={
        pares:[],
        impares:[]
    };
    for (let i=0;i<numeros.length;i++){
        let num = numeros[i];
        if(num % 2 === 0)
            resultado.pares.push(num);
        else
            resultado.impares.push(num);
    }
    return resultado
}
let obj = miFuncion([1,2,3,4,5]);
console.log(obj);

