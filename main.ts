GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    GAME_ZIP64.runMotor(100)
    radio.sendString("up")
    basic.showString("Sent")
    basic.pause(200)
})
radio.setGroup(1)
