import gameboard from "../src/modules/gameboard"
import ship from "../src/modules/ship"


describe('Ship functions', () => {
    let carrier
    let submarine
    beforeEach(() => {
        carrier = ship(5)
        submarine = ship(3)
    })

    test('Submarine length', () => {
        expect(submarine.length).toBe(3)
    })

    test('submarine hits 1', () => {
        carrier.hit()
        expect(carrier.hitCount).toBe(1)
    })

    test('Carrie hits 2', () => {
        carrier.hit()
        carrier.hit()
        expect(carrier.hitCount).toBe(2)
    })

    test('Submarine sunken 1', () => {
        submarine.hit()
        submarine.hit()
        submarine.hit()
        expect(submarine.isSunken()).toBeTruthy()
    })

    test('Carrier sunken 2', () => {
        carrier.hit()
        carrier.hit()
        carrier.hit()
        expect(carrier.isSunken()).toBeFalsy()
    })
})

describe('Gameboard function',() => {
    let playerBoard
    let carrier

    beforeEach(() => {
        playerBoard = gameboard()
        carrier = ship(5)
    })

    test('Gameboard board', () => {
        expect(playerBoard.board).toEqual((function () {
            let board = []
            for (let i = 0; i < 15; i++) {
                board.push(Array(15).fill(null))
            }
            return board
        })())
    })

    test('Gameboard placeShip 1', () => {
        playerBoard.placeShip(carrier, 0, 1, 'horizontal')
        expect(playerBoard.board[0][5]).toEqual(carrier)
    })

    test('Gameboard placeShip 2', () => {
        playerBoard.placeShip(carrier, 0, 0, 'vertical')
        expect(playerBoard.board[4][0]).toBe(carrier)
    })

    test('Gameboard placeShip 3', () => {
        playerBoard.placeShip(carrier, 0, 1, 'horizontal')
        expect(playerBoard.placeShip(carrier, 1, 1, 'horizontal')).toBeFalsy()
    })

    test('Gameboard ship hit 1', () => {
        playerBoard.placeShip(carrier, 10, 5, 'vertical')
        playerBoard.receiveAttack(14, 5)
        expect(carrier.hitCount).toBe(1)
    })

    test('Gameboard ship hit 2', () => {
        playerBoard.placeShip(carrier, 10, 5, 'horizontal')
        playerBoard.receiveAttack(10, 9)
        expect(carrier.hitCount).toBe(1)
    })

    test('Gameboard ship hit 3', () => {
        playerBoard.placeShip(carrier, 10, 5, 'vertical')
        playerBoard.receiveAttack(10, 5)
        playerBoard.receiveAttack(11, 5)
        playerBoard.receiveAttack(12, 5)
        expect(carrier.hitCount).toBe(3)
    })

    test('Gameboard ship hit 4', () => {
        playerBoard.placeShip(carrier, 10, 5, 'horizontal')
        playerBoard.receiveAttack(10, 6)
        playerBoard.receiveAttack(10, 8)
        playerBoard.receiveAttack(10, 5)
        playerBoard.receiveAttack(10, 7)
        expect(carrier.hitCount).toBe(4)
    })

    test('Gameboard ship sunken 1', () => {
        playerBoard.placeShip(carrier, 10, 5, 'vertical')
        playerBoard.receiveAttack(10, 5)
        expect(playerBoard.isShipsSunken()).toBeFalsy()
    })

    test('Gameboard ship sunken 2', () => {
        playerBoard.placeShip(carrier, 10, 5, 'vertical')
        playerBoard.receiveAttack(10, 5)
        playerBoard.receiveAttack(11, 5)
        playerBoard.receiveAttack(12, 5)
        playerBoard.receiveAttack(13, 5)
        playerBoard.receiveAttack(14, 5)
        expect(playerBoard.isShipsSunken()).toBeTruthy()
    })

    
})