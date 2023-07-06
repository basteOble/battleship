import gameLogic from "./gameLogic"
import helpers from "./helpers"

function createBoard (board, boardData, player) {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.setAttribute('data-key', `[${i},${j}]`)
      if (player) {
        if (boardData[i][j] !== null) {
          cell.classList.add('position-mark')
        }
        cell.classList.add('player')
      } else if (player === false) {
        cell.classList.add('ai')
      }
      board.append(cell)
    }
  }
}

function promptPlaceShip() {
  const main = document.querySelector('main')

  const container = document.createElement('div')
  const orientation = `<button class="orientation" data-key="horizontal">Horizontal</button>`

  const error = document.createElement('p')
  const board = document.createElement('div')

  createBoard(board)

  board.classList.add('board')
  error.classList.add('error')

  container.innerHTML += orientation
  container.append(board, error)
  main.append(container)

  changeShipOrientation()
}

function getShipOrientation() {
  const button = document.querySelector('.orientation')
  const orientation = button.getAttribute('data-key')
  return orientation
}

function changeShipOrientation() {
  const button = document.querySelector('.orientation')

  button.addEventListener('click', function () {
    const value = this.getAttribute('data-key') === 'horizontal' ? 'vertical' : 'horizontal'
    this.textContent = value
    this.setAttribute('data-key', value)
  })
}

function updateShipPlacementPreview (length, coord, orientation, board, remove) {
  const valid = 'preview-valid'
  const invalid = 'preview-invalid'
  let isValid = valid
  
  if (!helpers.isValidPosition(length, coord[0], coord[1], orientation, board)) {
    isValid = invalid
    if (orientation === 'horizontal') {
      length = Math.min(length, 15 - coord[1]);
    } else {
      length = Math.min(length, 15 - coord[0]);
    }
  }
  for (let i = 0; i < length; i++) {
    let position
    if (orientation === 'horizontal') {
      position = document.querySelector(`div[data-key="[${coord[0]},${coord[1] + i}]"]`)
    } else {
      position = document.querySelector(`div[data-key="[${coord[0] + i},${coord[1]}]"]`)
    }
    
    if (remove) {
      position.classList.remove(valid, invalid)
    } else {
      position.classList.toggle(isValid)
    }
  }
}

function markPlacedShip (coord, length, orientation) {
  const mark = 'position-mark'
  for (let i = 0; i < length; i++) {
    let position
    if (orientation === 'horizontal') {
      position = document.querySelector(`div[data-key="[${coord[0]},${coord[1] + i}]"]`)
    } else {
      position = document.querySelector(`div[data-key="[${coord[0] + i},${coord[1]}]"]`)
    }
    position.classList.add(mark)
  }
}

function invalidMessage(message = '') {
  const error = document.querySelector('.error')
  error.textContent = message
}

function createGameBoards (player) {
  const main = document.querySelector('main')
  clearMain(main)

  const playerBoard = document.createElement('div')
  const playerName = document.createElement('p')
  const aiBoard = document.createElement('div')
  const aiName = document.createElement('p')
  const playerArea = document.createElement('div')
  const aiArea = document.createElement('div')
  const message = document.createElement('p')
  message.classList.add('error')
  
  
  playerName.textContent = player.playerName
  aiName.textContent = 'AI'
  playerBoard.classList.add('board')
  aiBoard.classList.add('board')

  createBoard(playerBoard, player.playerBoard.board, true)
  createBoard(aiBoard, player.aiBoard.board, false)

  playerArea.append(playerName, playerBoard)
  aiArea.append(aiName, aiBoard, message)

  main.append(playerArea, aiArea)
}

function markHitArea (row, col, boardData, position) {
  if (boardData[row][col] !== null) {
    position.classList.add('hit')
  } else {
    position.classList.add('miss')
  }
}

function winMessage (win) {
  const main = document.querySelector('main')
  clearMain(main)

  const container = document.createElement('div')
  const message = document.createElement('p')
  const button = document.createElement('button')
  container.classList.add('message')
  button.textContent = 'again'
  button.classList.add('again')
  container.append(message,button)

  if (win) {
    message.textContent = `you win!`
    message.classList.add('win')
  } else {
    message.textContent = 'you lose :('
    message.classList.add('lose')
  }

  main.append(container)
}

function clearMain(main) {
  main.innerHTML = ''
}

function playAgain () {
  const button = document.querySelector('.again')
  const main = document.querySelector('main')
  button.addEventListener('click', () => {
    clearMain(main)
    gameLogic.initializeGame()
  })
}

export default {
  promptPlaceShip,
  getShipOrientation,
  changeShipOrientation,
  updateShipPlacementPreview,
  invalidMessage,
  markPlacedShip,
  createGameBoards,
  markHitArea,
  winMessage,
  playAgain
}