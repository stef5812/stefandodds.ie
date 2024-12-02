document.getElementById('logo').addEventListener('click', () => {
    const bubbles = document.querySelectorAll('.bubble');
    const areVisible = bubbles[0].style.opacity === "1"; // Check the visibility of the first bubble

    bubbles.forEach((bubble, index) => {
        setTimeout(() => {
            if (areVisible) {
                // Hide bubbles
                bubble.style.opacity = "0";
                bubble.style.transform = "scale(0) translate(-50%, -50%)";
            } else {
                // Show bubbles
                bubble.style.opacity = "1";
                bubble.style.transform = "scale(1) translate(-50%, -50%)";
            }
        }, index * 100); // Staggered delay for animation effect
    });
});
