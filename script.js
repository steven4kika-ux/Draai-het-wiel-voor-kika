
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
  "Respect 👏",
  "Topper ⭐",
  "Goed bezig 🎉"
];

const colors = [
  "#ffd166",
  "#ef476f",
  "#06d6a0",
  "#118ab2",
  "#8338ec",
  "#ff9f1c"
];

const slice = (Math.PI * 2) / labels.length;
let rotation = 0;
let spinning = false;

function drawWheel() {
  ctx.setTransform(1, 0, 0, 1, 0, 0); // ✅ reset transform
  ctx.clearRect(0, 0, size, size);

  ctx.translate(cx, cy);
  ctx.rotate(rotation);

  labels.forEach((text, i) => {
    const start = i * slice;
    const end = start + slice;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, r, start, end);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();

    ctx.save();
    ctx.rotate(start + slice / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.font = "14px sans-serif";
    ctx.fillText(text, r - 10, 5);
    ctx.restore();
  });

  ctx.setTransform(1, 0, 0, 1, 0, 0); // ✅ reset voor volgende draw
}

function spinWheel() {
  if (spinning) return;
  spinning = true;

  const duration = 2500;
  const startTime = performance.now();
  const targetRotation = rotation + Math.random() * Math.PI * 6 + Math.PI * 4;

  function animate(time) {
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    rotation = rotation + (targetRotation - rotation) * eased;

    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      rotation = targetRotation % (Math.PI * 2);
      spinning = false;
    }
  }

  requestAnimationFrame(animate);
}

drawWheel();
