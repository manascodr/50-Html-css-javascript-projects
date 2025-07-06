const board = document.querySelector('.board');
const colorPicker = document.getElementById('colorPicker');
const size = 10;

// Generate cells (without adding click listeners)
for (let i = 0; i < size * size; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.appendChild(cell);
}

board.addEventListener('click', function(e) {
  if (e.target.classList.contains('cell')) {
    e.target.style.backgroundColor = colorPicker.value;
  }
});
