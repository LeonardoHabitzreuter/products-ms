import { ApolloServer } from 'apollo-server'
import { createTestClient } from 'apollo-server-testing'
import IContext from '~/common/IContext'

const createServer = async (context?: IContext) => {
  const { schema } = require('~/modules/index')
  const server = new ApolloServer({
    schema,
    context: () => context
  })

  return createTestClient(server)
}

export default createServer
