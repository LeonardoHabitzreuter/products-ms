import { Field, InputType, ObjectType, ID } from 'type-graphql'
import { Matches, Length, IsEmail } from 'class-validator'
import { PASSWORD_REGEX } from '~/common/regex'

@ObjectType()
export default class User {
  @Field(_returns => ID)
  id: string

  @Field()
  name: string
}

@InputType()
export class CreateUserInput {
  @Field()
  @Length(1, 50)
  name: string

  @Field()
  @IsEmail()
  @Length(1, 50)
  email: string

  @Field()
  @Matches(PASSWORD_REGEX)
  password: string
}
