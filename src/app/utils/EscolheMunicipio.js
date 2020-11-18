function EscolheMunicipio(dados, municipio) {
  const quantidadeDeTarifas = dados.empresa.length;

  if (dados.empresa[0].listaDeMunicipios === 'todos') {
    return dados.empresa[0];
  }

  for (let i = 0; i < quantidadeDeTarifas; i += 1) {
    const contemMunicipio = dados.empresa[i].listaDeMunicipios.indexOf(municipio);

    if (contemMunicipio > -1) {
      return dados.empresa[i];
    }
  }

  return 'Municipio não encontrado';
}

module.exports = EscolheMunicipio;
