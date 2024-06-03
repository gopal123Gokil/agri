document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('action-button');
    const resetButton = document.getElementById('reset-button');
    const pressCountDisplay = document.getElementById('press-count');
    const imageContainer = document.getElementById('image-container');
    const soundEffect = document.getElementById('sound-effect');
    let pressCount = 0;

    actionButton.addEventListener('click', () => {
        // Play sound
        const soundEffect = new Audio('WhatsApp Audio 2024-06-03 at 22.01.55.mpeg');
        soundEffect.play();

        // Create and show new image with fade effect
        const newImage = document.createElement('img');
        newImage.src = 'hi.jpg';
        newImage.alt = 'Popup Image';
        newImage.classList.add('popup-image', 'hide');
        imageContainer.appendChild(newImage);

        // Trigger reflow to apply the transition effect
        newImage.offsetWidth;  // Reflow

        // Show image with fade effect
        newImage.classList.remove('hide');
        newImage.classList.add('show');

        // Hide image after a delay
        setTimeout(() => {
            newImage.classList.remove('show');
            newImage.classList.add('akhir');
            // Remove image from DOM after fade out
            newImage.addEventListener('transitionend', () => {
                newImage.remove();
            });
        }, 700);

        // Update and display press count
        pressCount++;
        pressCountDisplay.textContent = pressCount;
    });

    resetButton.addEventListener('click', () => {
        // Reset press count
        pressCount = 0;
        pressCountDisplay.textContent = pressCount;
    });
});
