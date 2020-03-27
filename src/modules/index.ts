import ProductResolver from './products/resolvers'
import { buildFederatedSchema } from '~/lib/buildFederatedSchema'

export const getSchema = buildFederatedSchema({
  resolvers: [
    ProductResolver
  ]
})
