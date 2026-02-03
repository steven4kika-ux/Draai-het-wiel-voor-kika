
// js/wheel.js
let ctx, radius, _prizes, _options;

export function setupWheel(canvas, prizes, options = {}) {
  if (!canvas) throw new Error('Wheel canvas not found');
  ctx = canvas.getContext('2d');
  radius = Math.min(canvas.width, canvas.height) / 2;
  _prizes = prizes;
  _options = options;
  render(0); // beginstand
}

export function render(angleRad = 0) {
  if (!ctx || !_prizes?.length) return;

  const { width, height } = ctx.canvas;
  const cx = width / 2;
  const cy = height / 2;
  ctx.clearRect(0, 0, width, height);

  const seg = (Math.PI * 2) / _prizes.length;

  // Wiel
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angleRad);

  for (let i = 0; i < _prizes.length; i++) {
    const start = i * seg;
    const prize = _prizes[i];

    // sector
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, start, start + seg);
    ctx.closePath();
    ctx.fillStyle = prize.color || `hsl(${(i * 360 / _prizes.length) | 0} 80% 55%)`;
    ctx.fill();

    // label
    ctx.save();
    ctx.rotate(start + seg / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px system-ui, sans-serif';
    ctx.fillText(prize.label, radius - 12, 6);
    ctx.restore();
  }
  ctx.restore();

  // pointer boven
  ctx.beginPath();
  ctx.moveTo(cx, cy - radius - 10);
  ctx.lineTo(cx - 10, cy - radius + 10);
  ctx.lineTo(cx + 10, cy - radius + 10);
  ctx.closePath();
  ctx.fillStyle = '#000';
  ctx.fill();
}
``
