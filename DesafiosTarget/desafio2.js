const fibonacci = (numero) => {
  let fibonacci = [0, 1];

  for (let i = fibonacci.length; ; i++) {
    const proximoNumero = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(proximoNumero);

    if (proximoNumero >= numero) {
      break;
    }
  }
  if (fibonacci.includes(numero)) {
    console.log(
      `O ${numero} pertence a sequência de Fibonacci, como demonstrado:`,
      fibonacci
    );
  } else {
    console.log(`O ${numero} não pertence a sequencia de Fibonacci.`);
  }
};

fibonacci(100);
