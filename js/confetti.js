
export function burst(container = document.body, count = 50) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.className = 'confetti';
    s.style.setProperty('--x', (Math.random() * 100 | 0) + 'vw');
    s.style.setProperty('--d', (2 + Math.random() * 2).toFixed(2) + 's');
    s.style.background = `hsl(${(i * 13) % 360} 90% 60%)`;
    frag.appendChild(s);
  }
  container.appendChild(frag);
  setTimeout(() => container.querySelectorAll('.confetti').forEach(n => n.remove()), 4500);
}
