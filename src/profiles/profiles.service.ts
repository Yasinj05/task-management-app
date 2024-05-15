import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly usersService: UsersService) {}

  async updateProfile(
    userId: number,
    profileData: Partial<User>,
  ): Promise<void> {
    await this.usersService.update(userId, profileData);
  }

  async uploadProfilePicture(
    userId: number,
    picturePath: string,
  ): Promise<void> {
    await this.usersService.update(userId, { profilePicture: picturePath });
  }
}
