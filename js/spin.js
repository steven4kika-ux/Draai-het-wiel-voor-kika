let spinning = false;

function spinWheel() {
    if (spinning) return;
    spinning = true;

    let spinTime = 0;
    const spinDuration = 3000;
    const spinSpeed = Math.random() * 0.3 + 0.25;

    function animate() {
        spinTime += 16;
        angle += spinSpeed;

        ctx.clearRect(0, 0, 500, 500);
        drawWheel();

        if (spinTime < spinDuration) {
            requestAnimationFrame(animate);
        } else {
            spinning = false;
            showResult();
        }
    }

    animate();
}
