require('dotenv').config()

const request = require('request')

const { SERVER_HOST, SERVER_PORT } = process.env

module.exports = class Comms {
  constructor (events) {
    this.events = events

    this.subscribe()
  }

  transmit (direction) {
    request.get(`http://${SERVER_HOST}:${SERVER_PORT}/move/${direction}`)

    console.log('direction:', direction)
  }

  subscribe () {
    this.events.on('move', (direction) => this.transmit(direction))
  }
}
