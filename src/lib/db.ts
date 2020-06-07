import { join } from 'path'
import { createConnection } from 'typeorm'

const { NODE_ENV, TEST_DATABASE_URL, DATABASE_URL } = process.env

export default createConnection({
  type: 'postgres',
  url: NODE_ENV === 'test' ? TEST_DATABASE_URL : DATABASE_URL,
  entities: [join(__dirname, '..', '/**/model.ts')]
})
