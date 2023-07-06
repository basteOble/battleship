import helpers from "./helpers"

function gameboard() {
  const shipList = []
  const boardSize = 15
  const board = []
  function initializeBoard(boardSize) {
    for (let i = 0; i < boardSize; i++) {
      board.push(Array(boardSize).fill(null))
    }
  }

  // check if input row and col is in range of board
  initializeBoard(boardSize)
  return {
    board,

    // return true if the ship is placed on the position
    placeShip: function (ship, row, col, orientation = 'horizontal') {
      // check if the ship can fit in the position or if it is occupied
      if (!helpers.isValidPosition(ship.length, row, col, orientation, board)) {
        return false
      }

      // Make the position as the reference to the ship
      shipList.push(ship)
      for (let i = 0; i < ship.length; i++) {
        const currentRow = orientation === 'horizontal' ? row : row + i
        const currentCol = orientation === 'vertical' ? col : col + i

        board[currentRow][currentCol] = ship
      }

      // return true if ship is on placed
      return true
    },

    // receive attack to the players board
    receiveAttack: function (row, col) {
      // Check if row and col is in range
      if (!helpers.isInRange(row) || !helpers.isInRange(col)) {
        throw new Error('Invalid attack coordinates')
      }
      // if coordinate is null turn it to false
      const coord = board[row][col]
      if (coord === null) {
        board[row][col] = false
        // if false alert the user that the coordinate is already hit
      } else if (coord === false) {
        throw new Error('Coodinates is already hit!')
        // else add hit to the ship and false the coordinate
      } else {
        board[row][col].hit()
        board[row][col] = false
      }
    },

    // Check if the ships on playersboard is sunken
    isShipsSunken: function () {
      return shipList.every(ship => ship.isSunken() === true)
    }
  }
}

export default gameboard