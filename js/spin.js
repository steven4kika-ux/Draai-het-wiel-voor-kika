
// js/spin.js
import { render } from "./wheel.js";

const TWO_PI = Math.PI * 2;
const rand = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;

let isSpinning = false;
let prizesRef = [];
let optsRef = {};
let onWinCb = () => {};

export function setupSpin(prizes, options, onWin) {
  prizesRef = prizes;
  optsRef = options || {};
  onWinCb = onWin || (() => {});
}

export function spin() {
  if (isSpinning || prizesRef.length === 0) return;
  isSpinning = true;

  const minMs = optsRef.minSpinMs ?? 4000;

  // Kies winnaar op basis van gewicht
  const targetIndex = weightedIndex(prizesRef);
  const n = prizesRef.length;
  const seg = TWO_PI / n;

  // Centreer het target segment onder de pointer (boven)
  const startAngle = rand() * TWO_PI;
  const extraSpins = 4 + Math.floor(rand() * 3); // 4–6 rondjes voor gevoel
  const targetAngleFromTop = (n - 1 - targetIndex) * seg;
  const centerOffset = seg / 2;
  const targetAngle = (-Math.PI / 2) + targetAngleFromTop + centerOffset + extraSpins * TWO_PI;

  const start = performance.now();

  function frame(now) {
    const t = Math.min((now - start) / minMs, 1);
    const eased = easeOutCubic(t);
    const angle = startAngle + eased * (targetAngle - startAngle);
    render(angle);

    if (t < 1) requestAnimationFrame(frame);
    else {
      isSpinning = false;
      const winner = prizesRef[targetIndex];
      if (optsRef.removeWinner) prizesRef.splice(targetIndex, 1);
      onWinCb(winner, { remaining: prizesRef.length });
    }
  }

  requestAnimationFrame(frame);
}

function easeOutCubic(x) { return 1 - Math.pow(1 - x, 3); }

function weightedIndex(items) {
  const weights = items.map(p => Math.max(0, p.weight ?? 1));
  const total = weights.reduce((a, b) => a + b, 0);
  let r = rand() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }
  return items.length - 1;
}
