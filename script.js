let speech = new SpeechSynthesisUtterance();
let voices = [];
let isPaused = false; 

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  if (!isPaused) {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
  }
});


document.querySelector("button").addEventListener("dblclick", () => {
  if (!isPaused) {
    window.speechSynthesis.pause();
    isPaused = true;
  } else {
    window.speechSynthesis.resume();
    isPaused = false;
  }
});


document.addEventListener("keydown", (event) => {

  if (event.key === "13") {
    if (!isPaused) {
      speech.text = document.querySelector("textarea").value;
      window.speechSynthesis.speak(speech);
    }
  }
});
