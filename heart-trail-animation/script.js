const bodyEl = document.querySelector('body');

// Throttle the event listener to improve performance
let lastMove = 0;
addEventListener('mousemove', (event) => {
    const now = Date.now();
    if (now - lastMove < 50) return; // Limit the event to once every 50ms
    lastMove = now;

    const xPos = event.clientX; // Use clientX for position relative to viewport
    const yPos = event.clientY;
    const spanEl = document.createElement('span');

    // Set the position of the span
    spanEl.style.left = xPos + 'px';
    spanEl.style.top = yPos + 'px';

    // Set a random size for the icon
    const size = Math.random() * 50 + 50; // Minimum 50px, max 100px
    spanEl.style.width = size + 'px';
    spanEl.style.height = size + 'px';

    // Append span to body
    bodyEl.appendChild(spanEl);

    // Remove the span after 3 seconds
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
