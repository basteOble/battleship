import gameboard from "./gameboard"
import ship from "./ship"

function player (name = 'You') {
  const playerName = name
  const playerBoard = gameboard()
  const aiBoard = gameboard()

  function randomNumber (range) {
    return Math.floor(Math.random() * range)
  }

  function positionAIShips() {
    const orientation = ['horizontal', 'vertical']
    let shipsCount = 6
    while (shipsCount > 0) {
      const randomPick = orientation[Math.floor(Math.random() * 2)]
      const row = randomNumber(15)
      const col = randomNumber(15)
      if (aiBoard.placeShip(ship(shipsCount), row, col, randomPick)) {
        shipsCount--
      }
    }
  }

  positionAIShips()

  return {
    playerName,
    playerBoard,
    aiBoard,
    playerAttack: function (row, col) {
      aiBoard.receiveAttack(row, col)
    },
    aiAttack: function () {
      let row = randomNumber(15)
      let col = randomNumber(15)
      while (playerBoard.board[row][col] === false) {
        row = randomNumber(15)
        col = randomNumber(15)
      }
      return [row, col]
    }
  }
}



export default player