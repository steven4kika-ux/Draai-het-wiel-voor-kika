// js/prizes.js
// =============
// Centrale configuratie van je wiel: prijzen en opties.

// ✅ Prijzenlijst
// - id       : unieke sleutel (handig voor logging, latere uitbreidingen)
// - label    : wat er op het segment staat (getoond in popup)
// - color    : segmentkleur; laat weg om automatisch HSL-kleuren te krijgen
// - weight   : kansgewicht (1 = standaard; 2 = ~2x zo waarschijnlijk; 0.5 = ~halve kans)
// - sponsorLogo (optioneel): pad naar een logo per prijs (toon in popup/init)

export const prizes = [
  { id: 'p1', label: 'Mok',        color: '#ffd166', weight: 1 },
  { id: 'p2', label: 'Dopper',     color: '#06d6a0', weight: 1 },
  { id: 'p3', label: 'T-shirt',    color: '#118ab2', weight: 1 },
  { id: 'p4', label: 'Challage',   color: '#ef476f', weight: 1 }, // schrijfwijze checken?
  { id: 'p5', label: 'Verrassing', color: '#8338ec', weight: 0.8 },
  { id: 'p6', label: 'Knuffel',    color: '#ff8fab', weight: 1 },
];

// ✅ Globale wiel-opties
// - removeWinner : na een spin de winnende prijs uit het wiel halen (geen dubbele win)
// - minSpinMs    : minimale draaitijd (in milliseconden) voor een prettige animatie
// - snapOnSegment: (voor als je in wheel.js met 'snappen' werkt; nu deterministisch in spin.js)
// - tickSound    : (optioneel) pad naar geluid; kun je later in init gebruiken

export const wheelOptions = {
  removeWinner: true,
  minSpinMs: 4000,
  snapOnSegment: true,
  // tickSound: 'assets/audio/tick.mp3',
};
