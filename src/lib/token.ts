import IContext from '~/common/IContext'
import { sign, verify } from 'jsonwebtoken'

const { TOKEN_EXPIRATION_TIME, TOKEN_KEY = '' } = process.env
const configs = { expiresIn: TOKEN_EXPIRATION_TIME }

export const generate = (data: IContext) => sign(data, TOKEN_KEY, configs)

export const validate = (token: string) => verify(token, TOKEN_KEY) as IContext
