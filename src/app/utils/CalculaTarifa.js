// Função que calcula tarifa.
function CalculaTarifa(dados, consumo) {
  const { valorFixo } = dados.categorias.residencialPadrao;
  const { aliquotas } = dados.categorias.residencialPadrao;
  const quantidadeDeAliquotas = aliquotas.length;
  const { faixasDeConsumo } = dados.categorias.residencialPadrao;
  const quantidadeDeFaixas = faixasDeConsumo.length;
  let faixaAtual = 0;

  function VerificaFaixaAtual() {
    for (let i = 0; i < quantidadeDeFaixas; i += 1) {
      if (i === quantidadeDeFaixas - 1) {
        faixaAtual = i;
        break;
      } else if (consumo > faixasDeConsumo[i] && consumo <= faixasDeConsumo[i + 1]) {
        faixaAtual = i;
        break;
      }
    }
  }

  function CalculaPrecoPorFaixa() {
    const precoPorFaixa = [0];
    for (let i = 0; i < quantidadeDeAliquotas - 1; i += 1) {
      precoPorFaixa.push(aliquotas[i] * (faixasDeConsumo[i + 1] - faixasDeConsumo[i]));
    }
    return precoPorFaixa;
  }

  function CalculaPrecoTotalFaixas(faixaAtual, precoPorFaixa) {
    let precoTotalFaixas = 0;
    for (let i = 0; i <= faixaAtual; i += 1) {
      precoTotalFaixas += precoPorFaixa[i];
    }
    return precoTotalFaixas;
  }

  function CalculaValorVariavel(faixaAtual, precoTotalFaixas) {
    const valorVariavel = (aliquotas[faixaAtual] * (consumo - faixasDeConsumo[faixaAtual])) + precoTotalFaixas;
    return valorVariavel;
  }

  VerificaFaixaAtual();
  const precoPorFaixa = CalculaPrecoPorFaixa();
  const precoTotalFaixas = CalculaPrecoTotalFaixas(faixaAtual, precoPorFaixa);
  const valorVariavel = CalculaValorVariavel(faixaAtual, precoTotalFaixas);
  const tarifa = valorFixo + valorVariavel;

  return tarifa;
}

module.exports = CalculaTarifa;
