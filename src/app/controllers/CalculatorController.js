const CalculaTarifa = require('../utils/CalculaTarifa');

module.exports = {
  async show(request, response) {
    const { uf, empresa, consumo } = request.params;
    const dados = await require(`../database/${uf}/${empresa}.json`);

    const tarifaCalculada = await CalculaTarifa(dados, consumo);

    return response.status(200).json(tarifaCalculada);
  },
};
