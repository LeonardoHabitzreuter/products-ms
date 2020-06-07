import getConnection from '~/lib/db'
import Product from './model'
import { ProductInput } from './typeDefs'

export const create = async (input: ProductInput) => {
  const db = await getConnection

  await db.manager.insert(Product, input)

  const product = await db.manager.findOneOrFail(Product, {
    where: {
      name: input.name
    }
  })

  return product.id
}
