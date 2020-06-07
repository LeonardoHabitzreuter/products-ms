import getConnection from '~/lib/db'
import encrypt from '~/lib/crypt'
import User from './model'
import Roles from './roles'
import { validateOrReject } from 'class-validator'
import { EntityManager } from 'typeorm'
import { CreateUserInput } from './typeDefs'

export const create = async (
  input: CreateUserInput,
  entityManager?: EntityManager,
  role: Roles = Roles.CUSTOMER
) => {
  await validateOrReject(input)
  const db = await getConnection

  const manager = entityManager || db.manager

  // Using create method because BeforeInsert hook implemented on model
  const user = manager.create(User, {
    ...input,
    role,
    password: encrypt(input.password)
  })

  await manager.insert(User, user)

  // Returning id within user
  return await manager.findOneOrFail(User, {where:{
    email: input.email
  }})
}
