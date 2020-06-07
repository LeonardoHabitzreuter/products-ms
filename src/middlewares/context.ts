import IContext from '~/common/IContext'
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer'
import { validate } from '~/lib/token'
import { isPublicRoute } from './auth'

export const getContext = ({ req }: ExpressContext): IContext | undefined => {
  const { authorization } = req.headers

  if (isPublicRoute(req)) {
    return
  }

  return validate(authorization || '')
}
