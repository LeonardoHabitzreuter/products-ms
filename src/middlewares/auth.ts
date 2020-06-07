import { Request, Response } from 'express'
import { validate } from '~/lib/token'

const NO_TOKEN_ERROR = {
  errors: [{
    message: 'Authorization header not provided',
    extensions: {
      code: 'NO_TOKEN_PROVIDED'
    }
  }]
}

const INVALID_TOKEN_ERROR = (message: string) => ({
  errors: [{
    message,
    extensions: {
      code: message.includes('jwt expired') ? 'EXPIRED_TOKEN' : 'INVALID_TOKEN'
    }
  }]
})

const PUBLIC_ACTIONS = ['login', 'createUser']

export const isPublicRoute = ({ body }: Request) => (
  !body.query ||
  body.operationName === 'IntrospectionQuery' ||
  PUBLIC_ACTIONS.some(action => body.query.includes(action))
)

export const authMiddleware = (req: Request, res: Response, next: () => void) => {
  if (isPublicRoute(req)) {
    next()
    return
  }

  const { authorization } = req.headers

  if (!authorization) {
    res.send(NO_TOKEN_ERROR)
    return
  }

  try {
    validate(authorization)
    next()
  } catch (error) {
    res.send(INVALID_TOKEN_ERROR(error.message))
  }
}
