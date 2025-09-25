function obtenerUsuario() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id: 12343, nombre: "Juan" });
    }, 1000);
  });
}

function obtenerPedidos(idUsuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Pedidos del usuario ${idUsuario} obtenidos`);
      resolve(["pedido1", "pedido2"]);
    }, 2000);
  });
}

function enviarCorreo(pedidos) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Correo enviado con pedidos:", pedidos);
      resolve();
    }, 3000);
  });
}

obtenerUsuario().then(usuario => {
    return obtenerPedidos(usuario.id).then(pedidos => {
        return enviarCorreo(pedidos);
      });
  }).then(() => {
    console.log("Proceso completo (promesas anidadas)");
  }).catch(error => {
    console.error("Error:", error);
  });

  