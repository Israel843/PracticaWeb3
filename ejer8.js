const f = (mensaje, callback) =>{
    setTimeout(()=>{
        console.log(`${mensaje}`);
        callback();
    },2000);
};

const flecha = () =>{
    console.log("Hola Mundo");
};
f("Esperando 2 segundos", flecha);

