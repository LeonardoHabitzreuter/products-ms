import uuid from 'uuid/v4'
import getConnection from '~/lib/db'
import Product from './model'
import { ProductInput } from './typeDefs'

export const create = async (product: ProductInput) => {
  const db = await getConnection

  const id = uuid()
  await db.manager.insert(Product, { ...product, id })

  return id
}
