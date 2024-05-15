import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column({ unique: true })
  @ApiProperty({ example: 'example@example.com' })
  email: string;

  @Column({ unique: true })
  @ApiProperty({ example: 'example_user' })
  username: string;

  @Column()
  @ApiProperty({ example: '+1234567890' })
  phone: string;

  @Column()
  @ApiProperty({ example: 'password' })
  password: string;

  @Column({ default: 'user' })
  @ApiProperty({ example: 'user' })
  role: string;

  @Column({ nullable: true })
  @ApiProperty({ example: 'http://example.com/profile_picture.jpg' })
  profilePicture: string;
}
