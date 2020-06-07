import roles from '~/modules/users/roles'

export default interface IContext {
  userId: string,
  role: roles
}