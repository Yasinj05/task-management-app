import {
  Controller,
  Put,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Param,
  Body,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfilePictureDto } from './dto/profile-picture.dto';
import * as multer from 'multer';
import { User } from '../users/entities/user.entity';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Put()
  @UseGuards(JwtAuthGuard)
  async updateProfile(@Body() profileData: Partial<User>): Promise<void> {
    // Extract userId from token or wherever it's stored in your application
    const userId = 1;
    await this.profileService.updateProfile(userId, profileData);
  }

  @Put('/picture')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadProfilePicture(
    @Param('id') userId: string,
    @UploadedFile() file: multer.Multer.File, // Adjusted import
  ): Promise<void> {
    // Handle file upload logic, save the file to disk or cloud storage, etc.
    // Then update the user's profile picture path in the database
    await this.profileService.uploadProfilePicture(parseInt(userId), file.path);
  }
}
