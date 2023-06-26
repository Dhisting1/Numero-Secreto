function verificaONumeroFalado(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido</div>`;
    return;
  }
  if (numeroForMaiorOuMenorQueValorPermitido(numero)) {
    elementoChute.innerHTML += `
    <div>
    Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor} 
    </div>`;
    return;
  }
  // condição caso o usuário acerte
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
          <h2>Você acertou!</h2>
          <h3>O número secreto é: ${numeroSecreto}</h3>
          `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>
    O número secreto é menor <i class="fas fa-hand-point-down"></i>
    </div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>
    O número secreto é maior <i class="fas fa-hand-point-up"></i>
    </div>
    `;
  }
}
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}
function numeroForMaiorOuMenorQueValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
