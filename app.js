let adviceId = document.getElementById("advice-id");
let adviceTxt = document.getElementById("advice-text");
let adviceButton = document.getElementById("generate-button");
let apiUrl = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(apiUrl);
  const {
    slip: { id, advice },
  } = await res.json();
  adviceId.innerText = id;
  adviceTxt.innerText = advice;
}

getAdvice();

adviceButton.addEventListener("click", getAdvice);
