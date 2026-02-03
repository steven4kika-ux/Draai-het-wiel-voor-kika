let spinning = false;
let angle = 0;
let spinVelocity = 0;

function spinWheel() {
    if (spinning) return;

    spinning = true;
    spinVelocity = Math.random() * 20 + 30; // Start snelheid

    const spinInterval = setInterval(() => {
        angle += spinVelocity;
        spinVelocity *= 0.97; // Wrijving

        document.getElementById("wheel").style.transform = `rotate(${angle}deg)`;

        if (spinVelocity < 0.5) {
            clearInterval(spinInterval);
            spinning = false;

            // --- PRIJS BEREKENEN ---
            const segmentAngle = 360 / prizes.length;
            const normalizedRotation = angle % 360;
            const selectedIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % prizes.length;
            const selectedPrize = prizes[selectedIndex];

            // --- POPUP TONEN ---
            showPopup(selectedPrize);
        }
    }, 20);
}

document.getElementById("spinButton").addEventListener("click", spinWheel);
