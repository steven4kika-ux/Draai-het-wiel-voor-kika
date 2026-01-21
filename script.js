
// Stap 4 – teken een stil wiel (geen draaien)

// 1) Pak het canvas uit de HTML
const canvas = document.getElementById("wheel");
if (!canvas) {
  console.warn("Canvas #wheel niet gevonden. Staat het <canvas id=\"wheel\"> in index.html?");
}
const ctx = canvas.getContext("2d");

// 2) Basis-instellingen
const CX = 150;          // middelpunt X
const CY = 150;          // middelpunt Y
const R  = 140;          // straal
const COLORS = [         // kleuren van de segmenten
  "#ff6b6b", "#ff9f43", "#1dd1a1",
  "#54a0ff", "#7d5fff", "#ffd166", "#00d2d3"
];
const SLICE = (2 * Math.PI) / COLORS.length;

// 3) Tekenfunctie
function drawWheel() {
  // Canvas leegmaken
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Segmenten tekenen
  COLORS.forEach((color, i) => {
    const start = i * SLICE;
    const end   = (i + 1) * SLICE;

    ctx.beginPath();
    ctx.moveTo(CX, CY);
    ctx.arc(CX, CY, R, start, end);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  });

  // (optioneel) dunne witte rand om het wiel
  ctx.beginPath();
  ctx.arc(CX, CY, R, 0, 2 * Math.PI);
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();
}

// 4) Eerste keer tekenen
if (canvas) {
  drawWheel();
}
