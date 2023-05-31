input.onButtonPressed(Button.A, function () {
    counter += 1
})
function count_down () {
    basic.showIcon(IconNames.Heart)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    for (let index = 0; index <= 4; index++) {
    	
    }
}
input.onButtonPressed(Button.AB, function () {
    Start_countdown = true
})
input.onButtonPressed(Button.B, function () {
    counter = 0
})
let Start_countdown = false
let counter = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
counter = 0
Start_countdown = false
basic.forever(function () {
    if (Start_countdown == false) {
        basic.showNumber(counter)
    } else {
        count_down()
    }
})
