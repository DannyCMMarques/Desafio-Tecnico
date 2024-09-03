const obterSOMA = () => {
  const i = 13;
  let SOMA = 0;
  let arrayValoresSOMA = [];
  for (let k = 0; k < i; k++) {
    SOMA += k;
    arrayValoresSOMA.push(SOMA);
  }

  const valorSOMAfinal = arrayValoresSOMA.pop();

  console.log(
    "Ao final do processamento a variável SOMA valerá:",
    valorSOMAfinal
  );
};

obterSOMA();
