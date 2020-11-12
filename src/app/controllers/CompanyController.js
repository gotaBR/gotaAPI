module.exports = {
  async show(request, response) {
    const { uf, empresa } = { uf: 'ms', empresa: 'sanesul' };
    const dados = await require(`../database/${uf}/${empresa}.json`);

    return response.status(200).json(dados);
  },
};
