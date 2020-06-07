import createServer from '../../helpers/createServer'
import '../../helpers/mocks'
import { clear, closeConnection } from '../../helpers/db'

const CREATE_USER = /* GraphQL */ `
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const LOGIN = /* GraphQL */ `
  mutation login($input: LoginInput!) {
    login(input: $input)
  }
`

describe('login', () => {
  beforeEach(clear)
  afterAll(closeConnection)

  test('should create an user and login', async () => {
    const { mutate } = await createServer()
    const user = {
      name: 'Jhon Carter',
      email: 'jhon.carter@gmail.com',
      password: '123abc'
    }

    await mutate({
      mutation: CREATE_USER,
      variables: { input: user }
    })

    const login = await mutate({
      mutation: LOGIN,
      variables: {
        input: {
          email: 'jhon.carter@gmail.com',
          password: '123abc'
        }
      }
    })

    expect(login.errors).toBeUndefined()
    expect(typeof login.data?.login).toBe('string')
  })
})
