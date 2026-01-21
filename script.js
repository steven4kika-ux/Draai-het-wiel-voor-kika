
// STAP 4 – zichtbaar test-wiel tekenen

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const cx = 150;
const cy = 150;
const r = 140;

const colors = [
  "#ff6b6b",
  "#ff9f43",
  "#1dd1a1",
  "#54a0ff",
  "#7d5fff",
  "#ffd166",
  "#00d2d3"
];

const angle = (Math.PI * 2) / colors.length;

function drawWheel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  colors.forEach((color, i) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(
      cx,
      cy,
      r,
      i * angle,
      (i + 1) * angle
    );
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  });
}

drawWheel();
