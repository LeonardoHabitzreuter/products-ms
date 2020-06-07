import ProductResolver from './products/resolvers'
import authChecker from '~/middlewares/permission'
import UserResolver from './users/resolvers'
import AuthResolver from './auth/resolvers'
import { buildSchemaSync } from 'type-graphql'

export const schema = buildSchemaSync({
  authChecker,
  resolvers: [
    AuthResolver,
    UserResolver,
    ProductResolver
  ]
})
