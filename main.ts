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
    if (receivedNumber == 1) {
        open()
        basic.pause(100)
    } else if (receivedNumber == 3) {
        close()
        basic.pause(100)
    }
})
function close () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
radio.setGroup(173)