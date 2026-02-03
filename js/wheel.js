const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");

let angle = 0;

function drawWheel() {
    const numSegments = prizes.length;
    const arcSize = (2 * Math.PI) / numSegments;

    for (let i = 0; i < numSegments; i++) {
        const startAngle = angle + i * arcSize;

        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, startAngle, startAngle + arcSize);
        ctx.fillStyle = i % 2 === 0 ? "#ffcc80" : "#ffa726";
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(startAngle + arcSize / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#000";
        ctx.font = "20px Arial";
        ctx.fillText(prizes[i], 230, 10);
        ctx.restore();
    }
}
