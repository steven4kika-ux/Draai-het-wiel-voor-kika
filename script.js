```js
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const cx = canvas.width / 2;
const cy = canvas.height / 2;
const r = 140;

const colors = [
  "#ffb3c6",
  "#ff8fab",
  "#fb6f92",
  "#f72585",
  "#b5179e",
  "#560bad"
];

const labels = [
  "High five",
  "Virtuele knuffel",
  "Dankjewel!",
  "🎉 Goed gedaan",
  "✨ Respect",
  "👏 Topper"
];

const angle = (Math.PI * 2) / labels.length;
let rotation = 0;
let spinning = false;

function drawWheel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  labels.forEach((label, i) => {
    const startAngle = rotation + i * angle;
    const endAngle = startAngle + angle;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.closePath();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(startAngle + angle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.font = "14px sans-serif";
    ctx.fillText(label, r - 10, 5);
    ctx.restore();
  });
}

function spinWheel() {
  if (spinning) return;
  spinning = true;

  const spinTime = 2500;
  const start = performance.now();
  const extraRotation = Math.random() * Math.PI * 8 + Math.PI * 6;

  function animate(time) {
    const progress = Math.min((time - start) / spinTime, 1);
    rotation = extraRotation * easeOut(progress);

    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      spinning = false;
    }
  }

  requestAnimationFrame(animate);
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

drawWheel();
