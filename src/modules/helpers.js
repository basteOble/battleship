// check if input row and col is in range of 15 x 15 board
function isInRange (position) {
  return position >= 0 && position < 15
}

function isValidPosition (shipLength, row, col, orientation, board) {
  const rowEnd = orientation === 'horizontal' ? row : row + shipLength - 1
  const colEnd = orientation === 'vertical' ? col : col + shipLength - 1

  // Check if the ships length fit in the selected position
  if (!isInRange(rowEnd) || !isInRange(colEnd)) {
    return false
  }
  // Check if position is occupied or is next to a ship (ships should be 1 'square' apart)
  for (let i = -1; i <= shipLength; i++) {
    for (let j = -1; j <= 1; j++) {
      const currentRow = orientation === 'horizontal' ? row + j : row + i
      const currentCol = orientation === 'vertical' ? col + j : col + i

      if (isInRange(currentRow) && isInRange(currentCol)) {
        if (board[currentRow][currentCol] !== null) {
          return false
        }
      }
    }
  }
  return true
}

export default {
  isInRange,
  isValidPosition
}