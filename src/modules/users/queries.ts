import getConnection from '~/lib/db'
import User from './model'

export const findOne = async (id: string) => {
  const db = await getConnection

  return await db.manager.findOneOrFail(User, { where: { id } })
}
