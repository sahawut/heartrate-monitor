input.onButtonPressed(Button.A, function () {
    heartbeat = true
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(inputAnalog)
    trace2.scrollImage(1, delay)
})
input.onGesture(Gesture.Shake, function () {
    heartbeat = true
})
let inputAnalog = 0
let heartbeat = false
let trace2: Image = null
let delay = 0
delay = 100
let trace1 = images.createImage(`
    # . . . .
    # . . . .
    # . . . .
    # # . . .
    # # # # #
    `)
trace2 = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
trace2.showImage(0)
basic.forever(function () {
    inputAnalog = pins.analogReadPin(AnalogPin.P1)
    if (inputAnalog > 700) {
        heartbeat = true
    }
    if (heartbeat) {
        heartbeat = false
        music.playTone(262, music.beat(BeatFraction.Half))
        trace1.scrollImage(1, delay)
        trace2.scrollImage(1, delay)
    }
})
