const obtenerUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id: 1, nombre: "Ana" });
    }, 1000);
  });
};

const obtenerPosts = (usuarioId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Posts del usuario ${usuarioId} obtenidos`);
      resolve([{ id: 101, titulo: "Mi primer post" }]);
    }, 1000);
  });
};

const obtenerComentarios = (postId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Comentarios del post ${postId} obtenidos`);
      resolve(["Buen post", "Gracias por Señor, por un dia mas de vida"]);
    }, 1000);
  });
};

// Usando .then() anidados
obtenerUsuario().then((usuario) => {
    return obtenerPosts(usuario.id).then((posts) => {
      return obtenerComentarios(posts[0].id).then((comentarios) => {
        console.log("Comentarios:", comentarios);
      });
    });
  }).catch((error) => {
    console.error("Error:", error);
  });

