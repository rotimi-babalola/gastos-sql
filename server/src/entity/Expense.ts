import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

import User from './User';

@Entity('Expenses')
export default class Expense extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: [
      'FOOD',
      'TRANSPORT',
      'ENTERTAINMENT',
      'TRAVEL',
      'HEALTH CARE',
      'UTILITIES',
      'MISCELLANEOUS',
    ],
  })
  category: string;

  @Column()
  amount: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  expenseInfo: string;

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

  @ManyToOne((type) => User, (user) => user.expenses, {
    nullable: false,
  })
  user: User;
}
