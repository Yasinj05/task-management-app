import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProfilePictureDto {
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Profile picture file',
  })
  file: any;
}
