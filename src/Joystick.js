const clear = require('clear')
const Mcp3008 = require('mcp3008.js')
const adc = new Mcp3008()

module.exports = class Joystick {
  constructor () {
    this.loop()
  }

  loop () {
    setInterval(() => {
      clear()

      adc.read(1, value => {
        console.log('channel 1:', value)
      })
      adc.read(0, value => {
        console.log('channel 0:', value)
      })
    })
  }
}
