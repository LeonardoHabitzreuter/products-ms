import { Field, ObjectType, InputType, ID, Int } from 'type-graphql'

@ObjectType()
export default class Product {
  @Field(_type => ID)
  id: string

  @Field()
  name: string

  @Field(_type => Int)
  stock: number
}

@InputType()
export class ProductInput {
  @Field()
  name: string

  @Field(_type => Int)
  stock: number
}

@InputType()
export class ProductFilter {
  @Field(_type => ID)
  id: string
}
