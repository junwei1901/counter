def on_button_pressed_a():
    global counter
    counter += 1
    basic.show_number(counter)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global index2
    basic.show_icon(IconNames.HEART)
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    music.start_melody(music.built_in_melody(Melodies.POWER_UP),
        MelodyOptions.ONCE_IN_BACKGROUND)
    basic.pause(1000)
    index2 = 9
    for index in range(9,0,-1):
        basic.show_number(index)
        music.play_tone(262, music.beat(BeatFraction.HALF))
    basic.show_icon(IconNames.SAD)
    music.start_melody(music.built_in_melody(Melodies.POWER_DOWN),
        MelodyOptions.ONCE)
    while True:
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        basic.pause(100)
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        basic.pause(100)
    while True:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global counter
    counter = 1
    basic.show_number(counter)
input.on_button_pressed(Button.B, on_button_pressed_b)

index2 = 0
counter = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
counter = 1
basic.show_number(counter)