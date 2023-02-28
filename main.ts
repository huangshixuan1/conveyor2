function open () {
    pins.servoWritePin(AnalogPin.P1, 90)
}
radio.onReceivedNumber(function (receivedNumber) {
    // 1 x
    // 3 x
    // 7 軌道向左轉
    // 9 軌道向右轉
    // 8 軌道上升
    // 2 軌道下降
    // 4 向左跑
    // 6 向右跑
    if (receivedNumber == 7) {
        turn_left()
        basic.pause(25)
    } else if (receivedNumber == 9) {
        turn_right()
        basic.pause(25)
    } else {
        stop()
    }
})
function turn_right () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function stop () {
    pins.digitalWritePin(DigitalPin.P1, 90)
}
function close () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function turn_left () {
    pins.digitalWritePin(DigitalPin.P1, 180)
}
radio.setGroup(173)
