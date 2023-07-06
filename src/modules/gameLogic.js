import dom from "./dom"
import player from "./player"
import ship from "./ship"

// Prompt player to ship their ships (6 ships)
function getPlayerShipPosition () {
  dom.promptPlaceShip()
  const user = player()
  const board = user.playerBoard.board
  const positions = document.querySelectorAll('.cell')
  let currShipLength = 6

  function handleMouseOver (e) {
    const coord = JSON.parse(e.target.dataset.key)
    const orientation = dom.getShipOrientation()
    dom.updateShipPlacementPreview(currShipLength, coord, orientation, board)
  }

  function handleMouseOut (e) {
    const coord = JSON.parse(e.target.dataset.key)
    const orientation = dom.getShipOrientation()
    dom.updateShipPlacementPreview(currShipLength, coord, orientation, board, true)
  }

  function handleClick (e) {
    const coord = JSON.parse(e.target.dataset.key)
    const orientation = dom.getShipOrientation()
    // if the ship is invalid, show a message to the player
    if (!user.playerBoard.placeShip(ship(currShipLength), coord[0], coord[1], orientation)) {
      dom.invalidMessage('Invalid ship placement!')
    } else {
      dom.invalidMessage('')
      dom.markPlacedShip(coord, currShipLength, orientation)
      currShipLength--
      // if all ships is placed, show the player board and the ai board(ai ships is hidden and will show only the part of the ship that's been hit)
      if (currShipLength === 0) {
        dom.createGameBoards(user)
        beginGame(user)
      }
    }
  }

  positions.forEach(position => {
    // preview ship position
    position.addEventListener('mouseover', handleMouseOver)
    // remove preview
    position.addEventListener('mouseout', handleMouseOut)
    // place ship on the selected position
    position.addEventListener('click', handleClick)
  })
}

// When the player is finish setting up their ship position the game starts
function beginGame (user) {
  const aiBoard = document.querySelectorAll('.ai')
  let turn = false

  function handleClick (e, position) {
    const [row, col] = JSON.parse(e.target.dataset.key)
    const aiBoardData = user.aiBoard.board
    if (aiBoardData[row][col] === false) {
      dom.invalidMessage('Coordinates already hit')
    } else {  
      handlePlayerTurn(row, col, aiBoardData, position)
    }
    if (turn) {
      handleAiTurn()
    }
  }

  function handlePlayerTurn (row, col, aiBoardData, position) {
    dom.invalidMessage('')
    dom.markHitArea(row, col, aiBoardData, position)
    user.playerAttack(row,col)
    if (user.aiBoard.isShipsSunken()) {
      turn = false
      dom.winMessage(true)
      dom.playAgain()
    } else {
      turn = true
    }
  }

  function handleAiTurn () {
    const [row, col] = user.aiAttack()
    const playerBoardData = user.playerBoard.board
    const position = document.querySelector(`div[data-key="[${row},${col}]"]`)
    dom.markHitArea(row, col, playerBoardData, position)
    user.playerBoard.receiveAttack(row, col)
    if (user.playerBoard.isShipsSunken()) {
      turn = true
      dom.winMessage(false)
      dom.playAgain()
    } else {
      turn = false
    }
  }

  aiBoard.forEach(position => {
    position.addEventListener('click', function (e) {
      handleClick(e, position)
    })
  })  
}

// Starts game
function initializeGame () {
  getPlayerShipPosition();
}

export default {
  initializeGame,
}