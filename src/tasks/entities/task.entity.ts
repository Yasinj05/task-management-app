import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: 'Task Name' })
  name: string;

  @Column()
  @ApiProperty({ example: 'Task Description' })
  description: string;

  @Column({ nullable: true })
  @ApiProperty({ example: 'http://example.com/attachment' })
  attachment: string;
}
