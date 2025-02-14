
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  guests: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  duration: number;

  @Column({ default: 'pending' }) // 'pending', 'confirmed', 'canceled'
  status: string;
}
