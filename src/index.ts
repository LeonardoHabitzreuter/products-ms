import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import { schema } from './modules'

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ user: req.headers.user })
})

const serverConfig = { port: 5000, cors: { origin: '*' } }

server.listen(serverConfig).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
