import {
  Controller,
  Put,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Param,
  Body,
} from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfilePictureDto } from './dto/profile-picture.dto';
import { User } from '../users/entities/user.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('profile')
@ApiTags('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Put()
  @ApiOperation({ summary: 'Update User Profile' })
  @ApiResponse({ status: 200, description: 'Profile updated successfully' })
  @UseGuards(JwtAuthGuard)
  async updateProfile(@Body() profileData: Partial<User>): Promise<void> {
    const userId = 1; // Extract userId from token or wherever it's stored
    await this.profileService.updateProfile(userId, profileData);
  }

  @Put('/picture')
  @ApiOperation({ summary: 'Upload Profile Picture' })
  @ApiResponse({
    status: 200,
    description: 'Profile picture uploaded successfully',
  })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadProfilePicture(
    @Param('id') userId: string,
    @UploadedFile() file: any,
  ): Promise<void> {
    await this.profileService.uploadProfilePicture(parseInt(userId), file.path);
  }
}
