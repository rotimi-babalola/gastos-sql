import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

import { IsEmail, Length } from 'class-validator';
import Expense from './Expense';

@Entity('Users')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  username: string;

  @Column()
  @Length(6)
  password: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  email: string;

  @CreateDateColumn({
    name: 'created_at',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    nullable: false,
  })
  updatedAt: Date;

  @OneToMany((type) => Expense, (expense) => expense.user)
  expenses: Expense[];
}
