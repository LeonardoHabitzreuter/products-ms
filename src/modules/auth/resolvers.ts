import User from '../users/typeDefs'
import { LoginInput } from './typeDefs'
import { Resolver, Arg, Mutation } from 'type-graphql'
import { login } from './login'

@Resolver(_of => User)
export default class AuthResolver {
  @Mutation(_returns => String)
  login(
    @Arg('input') input: LoginInput
  ) {
    return login(input)
  }
}
