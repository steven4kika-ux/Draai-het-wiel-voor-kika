function showResult() {
    const numSegments = prizes.length;
    const arcSize = (2 * Math.PI) / numSegments;

    const winningIndex = Math.floor(((2 * Math.PI - angle) % (2 * Math.PI)) / arcSize);

    document.getElementById("resultText").textContent =
        "Je hebt gewonnen: " + prizes[winningIndex];

    document.getElementById("resultPopup").classList.remove("hidden");
}

document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("resultPopup").classList.add("hidden");
});
