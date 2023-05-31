input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
    basic.pause(1000)
    index2 = 9
    for (let index = 9; index > 0; index += -1) {
        basic.showNumber(index)
        music.playTone(262, music.beat(BeatFraction.Half))
    }
basic.showIcon(IconNames.Sad)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    while (true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(100)
    }
    while (true) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    counter = 1
    basic.showNumber(counter)
})
let index2 = 0
let counter = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
counter = 1
basic.showNumber(counter)
