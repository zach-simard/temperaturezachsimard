let Current_Temperature = 0
basic.forever(function () {
    Current_Temperature = input.temperature()
    basic.showNumber(Current_Temperature)
    basic.pause(100)
    basic.clearScreen()
})
