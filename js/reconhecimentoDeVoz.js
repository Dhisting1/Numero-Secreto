const elementoChute = document.getElementById("chute");
// api de reconhecimento de voz
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();
recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => {
  return recognition.start();
});
function onSpeak(evt) {
  let chute = evt.results[0][0].transcript
    .replace("Menos ", "-")
    .replace("zero", "0")
    .replace("um", "1")
    .replace("dois", "2")
    .replace("três", "3")
    .replace("quatro", "4")
    .replace("cinco", "5")
    .replace("seis", "6")
    .replace("sete", "7")
    .replace("oito", "8")
    .replace("nove", "9")
    .replace("dez", "10");

  exibeChuteNaTela(chute);
  verificaONumeroFalado(chute);
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `;
}
