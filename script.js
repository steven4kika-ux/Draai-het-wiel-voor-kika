console.log("✅ script.js is geladen");
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

let rotation = 0;
let spinning = false;

function spinWheel() {
  if (spinning) return;
  spinning = true;

  const spinTime = 2000; // 2 seconden
  const start = performance.now();
  const extraRotation = Math.random() * Math.PI * 8 + Math.PI * 6;

  function animate(time) {
    const progress = Math.min((time - start) / spinTime, 1);
    rotation = extraRotation * progress;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.translate(-cx, -cy);

    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      spinning = false;
    }
  }

  requestAnimationFrame(animate);
}
