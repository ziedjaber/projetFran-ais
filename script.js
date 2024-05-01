function createButtonWithStars() {
    const button = document.createElement('button');
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');
    
    for (let i = 1; i <= 6; i++) {
        const star = document.createElement('div');
        star.classList.add(`star-${i}`);
        star.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 784.11 815.53" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path class="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                    </path>
                </g>
            </svg>`;
        starsContainer.appendChild(star);
    }

    button.appendChild(document.createTextNode('Commencer'));
    button.appendChild(starsContainer);

    return button;
}

// Function to generate buttons with stars
function generateButtons(count) {
    const buttonsContainer = document.getElementById('buttons-container');
    for (let i = 0; i < count; i++) {
        const button = createButtonWithStars();
        const link = document.createElement('a');
        link.href = 'page1.html';
        link.appendChild(button);
        buttonsContainer.appendChild(link);
        buttonsContainer.appendChild(document.createElement('br'));
        buttonsContainer.appendChild(document.createElement('br'));
    }
}

// Generate 5 buttons
generateButtons(5);


