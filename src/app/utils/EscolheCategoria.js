function EscolheCategoria(dados, categoria) {
  const quantidadeDeCategorias = Object.keys(dados.categorias).length;
  console.log(quantidadeDeCategorias);
  for (let i = 0; i < quantidadeDeCategorias; i += 1) {
    const cadaCategoria = Object.keys(dados.categorias)[i];

    const nomeDaCategoria = dados.categorias.eval(cadaCategoria).categoria;

    console.log(nomeDaCategoria);
  }
}

module.exports = EscolheCategoria;
