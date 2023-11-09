const PiranhaMessage = require('../../../PiranhaMessage') // You should change it if you transfer this file in another subdirectory
const ByteStream = require("../../../../ByteStream")
const ServerHelloMessage = require('../../Server/Auth/ServerHelloMessage')

class ClientHelloMessage extends PiranhaMessage {
  constructor (bytes, session) {
    super(session)
    this.session = session
    this.id = 10100
    this.version = 0
    this.stream = new ByteStream(bytes)
  }

  async decode () {
    this.stream.readInt()
  }

  async process () {
    await new ServerHelloMessage(this.session).send()
  }
}

module.exports = ClientHelloMessage
