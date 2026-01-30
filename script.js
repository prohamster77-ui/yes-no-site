let messages = [
  "If you say no, I will be really sad...",
  "Please reconsider 😢",
  "I’m begging you...",
  "Last chance..."
];

let messageIndex = 0;

function handleNoClick() {
  const yesButton = document.querySelector(".yes-button");
  const message = document.getElementById("message");

  messageIndex = (messageIndex + 1) % messages.length;
  message.textContent = messages[messageIndex];

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes.html";
}
