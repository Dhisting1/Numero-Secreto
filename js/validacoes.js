// função para verificar o número falado pelo usuário
function verificaONumeroFalado(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    if (
      chute.toLowerCase() === "fim de jogo" ||
      chute.toLowerCase() === "fim do jogo" ||
      chute.toLowerCase() === "game over"
    ) {
      gameOver();
    } else {
      elementoChute.innerHTML += `<div>Valor inválido</div>`;
    }
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

          <button class="btn" onclick="window.location.reload()">Jogar novamente</button>
          `;
  } else if (numero > numeroSecreto) {
    // mostra se o número é maior ou menor que o número secreto
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
// condições para verificar se o número é válido
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}
// condições para verificar se o número está entre o menor e o maior valor
function numeroForMaiorOuMenorQueValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

function gameOver() {
  recognition.stop();
  document.body.style.backgroundColor = "var(--bg-fim-jogo)";
  document.body.innerHTML = `
  <h2 class='fimDeJogo'>Fim de Jogo!</h2>
  <button class="btn-fim-jogo" onclick="window.location.reload()">Jogar novamente</button> 
  `;
}
