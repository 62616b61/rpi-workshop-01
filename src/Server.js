const express = require('express')

module.exports = class Server {
  constructor (events) {
    this.events = events
    this.app = express()

    this.routes()
    this.listen()
  }

  routes () {
    this.app.get('/move/:direction', (req, res) => {
      const direction = req.params.direction

      console.log('received direction:', direction)
      this.events.emit('move', direction)
      res.sendStatus(200)
    })
  }

  listen () {
    this.app.listen(3000, () => {
      console.log('Listening on port 3000!')
    })
  }
}
