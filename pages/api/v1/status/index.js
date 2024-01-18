function status(request, response) {
  response.status(200).json({ chave: "HTTP Revelado: Toque Pessoal" });
}

export default status;
