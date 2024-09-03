const calcularPercentual = () => {
  const valoresEstado = [
    { Estado: "SP", Valor: 67836.43 },
    { Estado: "RJ", Valor: 36678.66 },
    { Estado: "MG", Valor: 29229.88 },
    { Estado: "ES", Valor: 27165.48 },
    { Estado: "Outros", Valor: 19849.53 },
  ];

  const total = valoresEstado.reduce((acc, curr) => acc + curr.Valor, 0);
  const percentualPorEstado = valoresEstado.map((estado) => {
    const percentual = (estado.Valor / total) * 100;
    return { Estado: estado.Estado, Percentual: `${percentual.toFixed(2)}%` };
  });
  console.log(percentualPorEstado);
  return percentualPorEstado;
};

calcularPercentual();
