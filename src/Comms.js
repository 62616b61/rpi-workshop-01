module.exports = class Comms {
  constructor (events) {
    this.events = events

    this.subscribe()
  }

  transmit (direction) {
    console.log('direction:', direction)
  }

  subscribe () {
    this.events.on('move', (direction) => this.transmit(direction))
  }
}
