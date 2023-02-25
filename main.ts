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
    } else if (receivedNumber == 7) {
        軌道向左轉7()
        basic.pause(100)
    } else if (receivedNumber == 9) {
        軌道向右轉9()
        basic.pause(100)
    } else if (receivedNumber == 8) {
        軌道上升8()
        basic.pause(100)
    } else if (receivedNumber == 2) {
        軌道下降2()
        basic.pause(100)
    } else if (receivedNumber == 4) {
        向左跑4()
        basic.pause(100)
    } else if (receivedNumber == 6) {
        向右跑6()
        basic.pause(100)
    } else {
        停()
    }
})
function 軌道向右轉9 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P2,
    1,
    AnalogPin.P12,
    pwm
    )
}
function 軌道下降2 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    100
    )
}
function 向左跑4 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    pwm - 155
    )
}
function close () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function 向右跑6 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    pwm - 155
    )
}
function 軌道上升8 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    100
    )
}
function 停 () {
    sensors.DDMmotor(
    AnalogPin.P11,
    0,
    AnalogPin.P12,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
function 軌道向左轉7 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P2,
    0,
    AnalogPin.P12,
    pwm
    )
    sensors.DDMmotor(
    AnalogPin.P8,
    0,
    AnalogPin.P1,
    pwm
    )
}
let pwm = 0
radio.setGroup(173)
