
    const rollBtn = document.getElementById('rollBtn');
    const diceImage = document.getElementById('diceImage');

    rollBtn.addEventListener('click', () => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      diceImage.src = `./images/${randomNumber}.png`; // make sure you have dice1.png to dice6.png
    });