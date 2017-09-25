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
      res.send(req.params.direction)
    })
  }

  listen () {
    this.app.listen(3000, function () {
      console.log('Listening on port 3000!')
    })
  }
}
