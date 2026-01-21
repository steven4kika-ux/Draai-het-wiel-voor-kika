
// Stap 4 – teken een stil wiel

// Pak het canvas uit de HTML
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

// Instellingen
const centerX = 150;
const centerY = 150;
const radius = 140;

// Test-segmenten
const segments = [
  "#ff6b6b",
  "#ff9f43",
  "#1dd1a1",
  "#54a0ff",
  "#7d5fff",
  "#ffd166",
  "#00d2d3"
];

const anglePerSegment = (Math.PI * 2) / segments.length;

// Teken het wiel
function drawWheel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  segments.forEach((color, index) => {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(
      centerX,
      centerY,
      radius,
      index * anglePerSegment,
      (index + 1) * anglePerSegment
    );
    ctx.fillStyle = color;
    ctx.fill();
  });
}

// Eerste keer tekenen
drawWheel();
