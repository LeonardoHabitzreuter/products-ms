import 'reflect-metadata'
import 'dotenv/config'
import './configAliases'
import express from 'express'
import bodyParser from 'body-parser'
import { ApolloServer, toApolloError } from 'apollo-server-express'
import { GraphQLError } from 'graphql'
import { getContext } from '~/middlewares/context'
import { authMiddleware } from './middlewares/auth'
import { schema } from './modules/index'

const formatError = (error: GraphQLError) => {
  const { extensions } = error
  const code = error.message === 'Argument Validation Error'
    ? 'BAD_REQUEST'
    : extensions?.exception.code

  return extensions && extensions.exception
    ? toApolloError(error, code)
    : error
}

const server = new ApolloServer({
  schema,
  context: getContext,
  formatError,
})

const app = express()

app.use(bodyParser.json())
app.use(authMiddleware)

server.applyMiddleware({ app, path: '/' })

const PORT = process.env.PORT || 3000
const serverConfig = { port: PORT, cors: '*' }
app.listen(serverConfig, () =>
  console.log(`Server ready at http://localhost:${PORT}`)
)
