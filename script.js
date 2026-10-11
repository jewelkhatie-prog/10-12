
const openButton = document.getElementById("openButton");
const confettiContainer = document.getElementById("confetti");

openButton.addEventListener("click", () => {
  document.body.classList.add("open");

  const colors = ["#e5c8ff", "#f8c8dc", "#fff1a8", "#c6f6ff"];
  const symbols = ["✦", "✧", "★", "♡"];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("span");

    piece.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.position = "absolute";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.top = "-30px";
    piece.style.color =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = 12 + Math.random() * 18 + "px";
    piece.style.animation =
      `fall ${2 + Math.random() * 3}s linear forwards`;

    confettiContainer.appendChild(piece);

    setTimeout(() => piece.remove(), 5500);
  }
});

const style = document.createElement("style");

style.textContent = `
@keyframes fall {
  to {
    transform: translateY(110vh) rotate(720deg);
    opacity: 0;
  }
}`;

document.head.appendChild(style);
