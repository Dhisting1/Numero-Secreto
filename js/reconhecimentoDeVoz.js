const elementoChute = document.getElementById("chute");
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();
recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => {
  return recognition.start();
});
function onSpeak(evt) {
  chute = evt.results[0][0].transcript;

  exibeChuteNaTela(chute);
  verificaONumeroFalado(chute);
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `;
}
