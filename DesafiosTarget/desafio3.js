const dados = require("./../dados.json");

const faturamentoMensal = () => {
  const diasComFaturamento = dados.filter((item) => item.valor > 0);
  const valoresFaturamentoOC = diasComFaturamento
    .map((item) => item.valor)
    .sort((a, b) => a - b);
  const maiorValor = valoresFaturamentoOC.pop().toFixed(2);
  const menorValor = valoresFaturamentoOC.shift().toFixed(2);
  const mediaValor =
    valoresFaturamentoOC.reduce((acc, curr) => acc + curr, 0) /
    valoresFaturamentoOC.length;
  const diasValorSuperior = diasComFaturamento.filter(
    (item) => item.valor > mediaValor
  ).length;
  console.log(
    `Maior valor: ${maiorValor}, Menor valor: ${menorValor}, quantidade de dias com valor acima da médias: ${diasValorSuperior}`
  );
  return maiorValor, menorValor, diasValorSuperior;
};

faturamentoMensal();
