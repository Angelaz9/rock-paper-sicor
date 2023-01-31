input.onButtonPressed(Button.A, function () {
    OLED.writeStringNewLine("A")
    OLED.clear()
    p1 += 1
    rounds += 1
    update_scores()
})
input.onButtonPressed(Button.AB, function () {
    OLED.writeStringNewLine("1")
    OLED.clear()
    rounds += 1
    ties += 1
    update_scores()
})
input.onButtonPressed(Button.B, function () {
    OLED.writeStringNewLine("B")
    OLED.clear()
    p2 += 1
    rounds += 1
    update_scores()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("SHALL WE PLAY A GAME")
    p1 = 0
    p2 = 0
    rounds = 0
    ties = 0
    basic.pause(2000)
    OLED.clear()
    update_scores()
}
function update_scores () {
    OLED.clear()
    OLED.writeStringNewLine("player1" + p1)
    OLED.newLine()
    OLED.writeStringNewLine("player2" + p2)
    OLED.newLine()
    OLED.writeStringNewLine("rounds" + rounds)
    OLED.newLine()
    OLED.writeStringNewLine("ties" + ties)
}
let p2 = 0
let ties = 0
let rounds = 0
let p1 = 0
reset()
