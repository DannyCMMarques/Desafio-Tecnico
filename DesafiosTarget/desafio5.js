const inverterLetras = (string) => {
    const palavraFixa = "Target";
    if (!string) {
        string = palavraFixa;
    }
    const arrayLetras = string.split("");
    let novoArray = [];
    for (let i = arrayLetras.length - 1; i >= 0; i--) {
        novoArray.push(arrayLetras[i]);
    }
    console.log(novoArray.join(""));
    return novoArray.join("");
};
inverterLetras();
