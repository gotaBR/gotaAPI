const CalculaTarifa = require('../utils/CalculaTarifa');
const EscolheMunicipio = require('../utils/EscolheMunicipio');
const EscolheCategoria = require('../utils/EscolheCategoria');
const TrataString = require('../utils/TrataString');

module.exports = {
  async show(request, response) {
    const {
      uf, empresa, municipio, categoria, consumo,
    } = request.params;

    const dados = await require(`../database/${uf}/${empresa}.json`);

    const municipioTratado = TrataString(municipio);
    const categoriaTratada = TrataString(categoria);

    const dadosDoMunicipio = EscolheMunicipio(dados, municipioTratado);
    const dadosDaCategoria = EscolheCategoria(dadosDoMunicipio, categoriaTratada);

    const tarifaCalculada = await CalculaTarifa(dadosDaCategoria, consumo);

    return response.status(200).json(tarifaCalculada);
  },
};
