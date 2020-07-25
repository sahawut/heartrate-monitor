input.onButtonPressed(Button.A, function () {
    heartbeat = true
})
input.onGesture(Gesture.Shake, function () {
    heartbeat = true
})
let heartbeat = false
let trace1 = images.createImage(`
    # . . . .
    # . . . .
    # . . . .
    # # . . .
    # # # # #
    `)
let trace2 = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
trace2.showImage(0)
basic.forever(function () {
    if (heartbeat) {
        heartbeat = false
        music.playTone(262, music.beat(BeatFraction.Half))
        trace1.scrollImage(1, 200)
        trace2.scrollImage(1, 200)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 800) {
        heartbeat = true
    }
})
