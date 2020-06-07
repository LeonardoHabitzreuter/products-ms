class CustomError extends Error {
  constructor(code: string, message: string) {
    super(message)
    this.code = code
  }

  public code: string
}

export const INVALID_LOGIN_ERROR = new CustomError(
  'INVALID_LOGIN',
  'Email or password incorrect!'
)

export const USER_DELETED_ERROR = new CustomError(
  'USER_DELETED',
  'Sorry, your user was deleted!'
)
