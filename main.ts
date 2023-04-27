let nummer = 0
input.onButtonPressed(Button.A, function () {
    nummer = randint(1, 6)
    if (nummer == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (nummer == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (nummer == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (nummer == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # . # .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
