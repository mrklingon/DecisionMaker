input.onSwitchMoved(SwitchDirection.Right, function () {
    light.showAnimation(light.rainbowAnimation, 500)
    light.setAll(0x000000)
})
function cleartally() {
    bad = 0
    good = 0
}
function magic8() {
    light.showAnimation(light.rainbowAnimation, 500)
    light.setAll(0x000000)
    ans = Math.randomRange(0, 7)
    light.setAll(colors[ans])
    pause(2000)
    light.setAll(0x000000)
}
function magic8text() {
    light.showAnimation(light.rainbowAnimation, 500)
    light.setAll(0x000000)
    ans = Math.randomRange(0, 7)
    light.setAll(colors[ans])
    keyboard.type("" + answers[ans])
    pause(2000)
    light.setAll(0x000000)
}
input.onSwitchMoved(SwitchDirection.Left, function () {
    light.showAnimation(light.rainbowAnimation, 500)
    light.setAll(0x000000)
    cleartally()
    g = 0
    b = 0
    savans = 0
})
input.touchA7.onEvent(ButtonEvent.Click, function () {
    if (!(input.switchRight()) && savans != 0) {
        light.showAnimation(light.rainbowAnimation, 500)
        if (2 == savans) {
            light.setAll(0xffff00)
        } else if (3 == savans) {
            light.setAll(0xff0000)
        } else {
            light.setAll(0x00ff00)
        }
    }
    pause(2000)
    light.setAll(0x000000)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (!(input.switchRight())) {
        b += 1
        if (b > 5) {
            b = 5
        }
        light.setPixelColor(barray[b - 1], 0xff0000)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (input.switchRight()) {
        magic8()
    } else {
        g += 1
        if (g > 5) {
            g = 5
        }
        light.setPixelColor(garray[g - 1], 0x00ff00)
    }
})
input.touchA4.onEvent(ButtonEvent.Click, function () {
    if (input.switchRight()) {
        magic8text()
    }
})
input.touchA1.onEvent(ButtonEvent.Click, function () {
    if (!(input.switchRight())) {
        good += g
        bad += b
        b = 0
        g = 0
        light.setAll(0x000000)
    }
})
input.touchA2.onEvent(ButtonEvent.Click, function () {
    b = 0
    g = 0
    light.showAnimation(light.rainbowAnimation, 500)
    if (!(input.switchRight())) {
        if (good == bad) {
            light.setAll(0xffff00)
            savans = 2
        } else if (good > bad) {
            light.setAll(0x00ff00)
            savans = 1
        } else {
            light.setAll(0xff0000)
            savans = 3
        }
    }
    pause(2000)
    light.setAll(0x000000)
    cleartally()
})
let savans = 0
let b = 0
let g = 0
let ans = 0
let colors: number[] = []
let answers: string[] = []
let barray: number[] = []
let garray: number[] = []
let bad = 0
let good = 0
good = 0
bad = 0
light.showAnimation(light.rainbowAnimation, 500)
light.setAll(0x000000)
garray = [4, 3, 2, 1, 0]
barray = [5, 6, 7, 8, 9]
answers = ["Yes, definitely.", "As I see it, yes.", "Reply hazy, try again.", "Cannot predict now.", "Do not count on it.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
colors = [Colors.Green, Colors.Green, Colors.Yellow, Colors.Yellow, Colors.Yellow, Colors.Red, Colors.Red]
