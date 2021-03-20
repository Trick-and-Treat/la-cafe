import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  shortDescription: string;

  @Column('text')
  description: string;

  @Column()
  size: string;

  @Column()
  quantity: number;

  @Column({ default: false })
  status: boolean;
}
