
import { prizes as initialPrizes, wheelOptions } from './prizes.js';
import { setupWheel } from './wheel.js';
import { setupSpin, spin } from './spin.js';
import { setupPopup, showWinner } from './popup.js';
import { burst } from './confetti.js';

const state = {
  prizes: structuredClone(initialPrizes),
  options: { ...wheelOptions },
};

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('wheelCanvas');
  const spinBtn = document.getElementById('spinBtn');
  const live = document.getElementById('winnerLive');

  setupWheel(canvas, state.prizes, state.options);
  setupPopup();

  setupSpin(state.prizes, state.options, (winner, info) => {
    live.textContent = `Winnaar: ${winner.label}`;
    showWinner(winner);
    burst(document.body);

    // Rerender met overgebleven segmenten (bij removeWinner=true)
    setupWheel(canvas, state.prizes, state.options);

    if (info.remaining === 0) {
      spinBtn.disabled = true;
      spinBtn.textContent = 'Alle prijzen vergeven 🎉';
    }
  });

  spinBtn.addEventListener('click', () => spin());
  spinBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') spin();
  });
});
