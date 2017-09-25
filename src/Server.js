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
      res.send('Hello World!', req.params.direction)
    })
  }

  listen () {
    this.app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
    })
  }
}
