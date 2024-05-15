import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'example_user' })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'Password123' })
  password: string;
}
