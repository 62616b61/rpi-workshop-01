const EventEmitter = require('events')
const Joystick = require('./src/Joystick')
const Comms = require('./src/Comms')

const events = new EventEmitter()

const joystick = new Joystick(events)
const comms = new Comms(events)
