const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

const elemetoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");
// exibe os valores mínimo e máximo na tela
elemetoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

// gera um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}
