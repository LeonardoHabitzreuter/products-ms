import Product from './model'
import getConnection from '~/lib/db'
import { FindConditions } from 'typeorm'
import { removeUndefinedProps } from '~/common/object'
import { ProductFilter } from './typeDefs'

export const findLast = async (filters?: ProductFilter) => {
  const db = await getConnection

  const where = removeUndefinedProps<FindConditions<Product>>(filters)

  return await db.manager.findOne(Product, where, {
    order: {
      createdAt: "DESC"
    }
  })
}