input.onGesture(Gesture.Shake, function () {
    if (list.length == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        let tabell: number[] = []
        basic.showString("" + (list.removeAt(randint(0, tabell.length))))
    }
})
let list: string[] = []
list = ["Victor", "Sindre", "Espen"]
