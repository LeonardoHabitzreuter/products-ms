import roles from './roles'
import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert
} from 'typeorm'

@Entity('users')
export default class User {
  @BeforeInsert()
  updateDates() {
    this.emailVerified = new Date()
  }

  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ nullable: true })
  avatar?: string

  @Column({ nullable: true })
  locale?: string

  @Column({
    type: 'enum',
    enum: roles,
    default: roles.CUSTOMER
  })
  role: roles

  @Column({ nullable: true })
  emailVerified?: Date

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date

  @Column({ nullable: true })
  deletedAt?: Date
}