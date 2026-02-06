let messages = [
  "If you say no, I will be really sad...",
  "Please reconsider 😢",
  "I’m begging you...",
  "Last chance...",
  "Pleasee speed i need thissss",
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
  fetch("https://formspree.io/f/xeekrndr", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      answer: "somebody clicked yes!",
      time: new Date().toLocaleString()
    })
  });

  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      font-family:Arial;
    ">
      <h1>REALLY??!?!! I LOVE YOUUUU 💗</h1>
      <img src="https://media.tenor.com/HKQ9w2VpTHwAAAAj/ily.gif" style="width:250px;margin-top:20px;">
    </div>
  `;
}
