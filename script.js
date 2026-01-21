
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const size = canvas.width;
const cx = size / 2;
const cy = size / 2;
const r = 140;

const labels = [
  "High five 🙌",
  "Dankjewel 💛",
  "Virtuele knuffel 🤗",
  "Topper ⭐",
  "Goed bezig 🎉",
  "Respect 👏"
];

const colors = [
  "#ffbe0b",
  "#fb5607",
  "#ff006e",
  "#8338ec",
  "#3a86ff",
  "#06d6a0"
];

const slice = (Math.PI * 2) / labels.length;
let rotation = 0;
let spinning = false;

function reset() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function drawWheel() {
  reset();
  ctx.clearRect(0, 0, size, size);

  ctx.translate(cx, cy);
  ctx.rotate(rotation);

  for (let i = 0; i < labels.length; i++) {
    const start = i * slice;
    const end = start + slice;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, r, start, end);
    ctx.fillStyle = colors[i];
    ctx.fill();

    ctx.save();
    ctx.rotate(start + slice / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.font = "14px Arial";
    ctx.fillText(labels[i], r - 10, 5);
    ctx.restore();
  }

  reset();
}

function spinWheel() {
  if (spinning) return;
  spinning = true;

  const startRotation = rotation;
  const extra = Math.random() * Math.PI * 6 + Math.PI * 4;
  const target = startRotation + extra;

  const duration = 2500;
  const startTime = performance.now();

  function animate(time) {
    const t = Math.min((time - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);

    rotation = startRotation + (target - startRotation) * ease;
    drawWheel();

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      rotation = target % (Math.PI * 2);
      spinning = false;
    }
  }

  requestAnimationFrame(animate);
}

drawWheel();
``
