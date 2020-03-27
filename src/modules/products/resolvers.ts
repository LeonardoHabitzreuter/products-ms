import Product, { ProductInput, ProductFilter } from './typeDefs'
import { Query, Resolver, Arg, Mutation, ID } from 'type-graphql'
import { findLast } from './queries'
import { create } from './mutations'

@Resolver(_of => Product)
export default class ProductResolver {
  @Query(_returns => Product, { nullable: true })
  product(
    @Arg('filter', { nullable: true }) filter: ProductFilter
  ) {
    return findLast(filter)
  }

  @Mutation(_returns => ID)
  createProduct(
    @Arg('input') input: ProductInput
  ) {
    return create(input)
  }
}
