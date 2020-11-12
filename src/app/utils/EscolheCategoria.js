function EscolheCategoria(dados, categoria) {
  const quantidadeDeCategorias = Object.keys(dados.categorias).length;
  for (let i = 0; i < quantidadeDeCategorias; i += 1) {
    const cadaCategoria = (Object.values(dados.categorias)[i]);
    const nomeDaCategoria = cadaCategoria.categoria;
    const nomeTratado = nomeDaCategoria.normalize('NFD').replace(/[^a-zA-Zs ]/g, '');

    if (categoria === nomeTratado) {
      return cadaCategoria;
    }
  }
  return 'Categoria não encontrada';
}

module.exports = EscolheCategoria;
