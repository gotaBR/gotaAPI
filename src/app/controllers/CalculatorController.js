const CalculaTarifa = require('../utils/CalculaTarifa');
const EscolheMunicipio = require('../utils/EscolheMunicipio');

module.exports = {
  async show(request, response) {
    const { uf, empresa, consumo } = request.params;
    const dados = await require(`../database/${uf}/${empresa}.json`);

    const dadosDoMunicipio = EscolheMunicipio(dados);

    const tarifaCalculada = await CalculaTarifa(dadosDoMunicipio, consumo);

    return response.status(200).json(tarifaCalculada);
  },
};
