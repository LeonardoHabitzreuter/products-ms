import getConnection from '~/lib/db'
import encrypt from '~/lib/crypt'
import User from '~/modules/users/model'
import { INVALID_LOGIN_ERROR, USER_DELETED_ERROR } from '~/common/error'
import { generate } from '~/lib/token'
import { LoginInput } from './typeDefs'

export const login = async (input: LoginInput) => {
  const db = await getConnection

  const user = await db.manager.findOne(User, {where: {
    email: input.email,
    password: encrypt(input.password)
  }})

  if (!user) {
    throw INVALID_LOGIN_ERROR
  }

  if (user.deletedAt) {
    throw USER_DELETED_ERROR
  }

  return generate({
    userId: user.id,
    role: user.role
  })
}

export default login
