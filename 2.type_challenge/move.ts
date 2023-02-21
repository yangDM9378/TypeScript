const position = { x: 0, y: 0 };

console.log(position);
move('up');
console.log(position);
move('down');
console.log(position);
move('left');
console.log(position);
move('right');

type Move = 'up' | 'down' | 'left' | 'right';
function move(command: Move) {
  switch (command) {
    case 'up':
      position.y = position.y + 1;
      break;
    case 'down':
      position.y = position.y - 1;
      break;
    case 'left':
      position.x = position.x - 1;
      break;
    case 'right':
      position.x = position.x + 1;
      break;
    default:
      throw new Error(`unknown command: ${command}`);
  }
}
