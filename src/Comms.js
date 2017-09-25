require('dotenv').config()

const request = require('request')

module.exports = class Comms {
  constructor (events) {
    this.events = events
    this.host = process.env.HOST
    this.port = process.env.PORT

    this.subscribe()
  }

  transmit (direction) {
    request.get(`${this.host}:${this.port}/move/${direction}`)
    console.log('direction:', direction)
  }

  subscribe () {
    this.events.on('move', (direction) => this.transmit(direction))
  }
}
