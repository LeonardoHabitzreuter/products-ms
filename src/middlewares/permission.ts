import { ResolverData } from 'type-graphql'
import IContext from '~/common/IContext'

const permissionMiddleware = ({ context }: ResolverData<IContext>, roles: string[]) => (
  roles.includes(context.role.toString())
)

export default permissionMiddleware
