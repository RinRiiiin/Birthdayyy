const tryAgainBtn = document.getElementById("try-again");
const errorScreen = document.getElementById("error-screen");
const envelopeScreen = document.getElementById("envelope-screen");
const envelope = document.getElementById("envelope");
const letterScreen = document.getElementById("letter-screen");

tryAgainBtn.addEventListener("click", () => {
  errorScreen.classList.add("hidden");
  envelopeScreen.classList.remove("hidden");
});

envelope.addEventListener("click", () => {
  envelopeScreen.classList.add("hidden");
  letterScreen.classList.remove("hidden");
});
