function status(request, response) {
  response
    .status(200)
    .json({ chave: "Encostando a mão no Protocolo HTTP sem maquiagem" });
}

export default status;
