GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    radio.sendString("up")
    basic.showArrow(ArrowNames.North)
    basic.pause(200)
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    radio.sendString("down")
    basic.showArrow(ArrowNames.South)
    basic.pause(200)
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {    
    radio.sendString("left")
    basic.showArrow(ArrowNames.West)
    basic.pause(200)
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {    
    radio.sendString("right")
    basic.showArrow(ArrowNames.East)
    basic.pause(200)
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {    
    radio.sendString("happy")
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire2, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {    
    radio.sendString("heart")
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
})

radio.setGroup(1)
