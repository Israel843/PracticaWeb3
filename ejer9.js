const miPromesa = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Good Morning");
    },3000);
});
miPromesa.then((mensaje)=>{
    console.log(mensaje);
})

