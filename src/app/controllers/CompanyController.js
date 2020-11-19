const TrataString = require('../utils/TrataString');

module.exports = {
  async show(request, response) {
    const { uf, empresa } = request.params;
    const nomeTratado = TrataString(empresa);
    const dados = await require(`../database/${uf}/${nomeTratado}.json`);

    return response.status(200).json(dados);
  },
};
