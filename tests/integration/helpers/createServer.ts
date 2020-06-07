import { ApolloServer } from 'apollo-server'
import { createTestClient } from 'apollo-server-testing'

const createServer = async () => {
  const { schema } = require('~/modules/index')
  const server = new ApolloServer({ schema })

  return createTestClient(server)
}

export default createServer
