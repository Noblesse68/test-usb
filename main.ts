basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # # . # #
    # # . # #
    `)
basic.forever(function () {
    serial.writeLine("Température ")
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    serial.writeLine("Champs magnétique")
    serial.writeNumber(input.magneticForce(Dimension.X))
    serial.writeLine("")
    serial.writeLine("Lumiere")
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
})
