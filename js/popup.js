
let root, lastFocus;

export function setupPopup(rootEl = document.getElementById('popupRoot')) {
  root = rootEl;
}

export function showWinner(winner) {
  lastFocus = document.activeElement;

  root.innerHTML = `
    <div class="popup-backdrop" role="dialog" aria-modal="true" aria-label="Winnaar">
      <div class="popup-card">
        <h2>Gefeliciteerd!</h2>
        <p>Je hebt <strong>${winner.label}</strong> gewonnen 🎉</p>
        <button id="closePopup">Oké</button>
      </div>
    </div>
  `;
  root.hidden = false;

  const btn = root.querySelector('#closePopup');
  btn.focus();

  btn.addEventListener('click', close);
  root.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  root.querySelector('.popup-backdrop').addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-backdrop')) close();
  });
}

export function close() {
  root.hidden = true;
  root.innerHTML = '';
  if (lastFocus?.focus) lastFocus.focus();
}
