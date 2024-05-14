import { IsNotEmpty } from 'class-validator';
import { Multer } from 'multer';

export class ProfilePictureDto {
  @IsNotEmpty()
  file: Multer.File;
}
