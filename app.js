const EventEmitter = require('events')
const Joystick = require('./src/Joystick')
const Transmitter = require('./src/Transmitter')

const events = new EventEmitter()

const joystick = new Joystick(events)
const transmitter = new Transmitter(events)
