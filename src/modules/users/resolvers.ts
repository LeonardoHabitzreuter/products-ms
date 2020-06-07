import IContext from '~/common/IContext'
import User, { CreateUserInput } from './typeDefs'
import { Resolver, Query, Arg, Mutation, Ctx } from 'type-graphql'
import { findOne } from './queries'
import { create } from './mutations'

@Resolver(_of => User)
export default class UserResolver {
  @Query(_returns => User)
  me(
    @Ctx() ctx: IContext
  ) {
    return findOne(ctx.userId)
  }

  @Mutation(_returns => User)
  createUser(
    @Arg('input') input: CreateUserInput
  ) {
    return create(input)
  }
}
