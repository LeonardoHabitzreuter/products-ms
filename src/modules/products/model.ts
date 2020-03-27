import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('products')
export default class Product {
  @PrimaryColumn({ name: 'id' })
  id: string

  @Column({ name: 'name' })
  name: string

  @Column({ name: 'stock' })
  stock: number

  @Column({ name: 'createdAt' })
  createdAt: string

  @Column({ name: 'updatedAt' })
  updatedAt: string
}
