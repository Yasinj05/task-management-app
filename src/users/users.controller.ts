import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({
    status: 200,
    description: 'Users retrieved successfully',
    type: User,
    isArray: true,
    schema: {
      example: [
        {
          id: 1,
          email: 'example@example.com',
          username: 'example_user',
          phone: '+1234567890',
          role: 'user',
          profilePicture: 'http://example.com/profile_picture.jpg',
        },
      ],
    },
  })
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<User>,
  ): Promise<void> {
    await this.usersService.update(parseInt(id), updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string): Promise<void> {
    await this.usersService.remove(parseInt(id));
  }

  @Put(':id/role')
  @ApiOperation({ summary: 'Assign Role to User' })
  @ApiResponse({ status: 200, description: 'Role assigned successfully' })
  @UseGuards(JwtAuthGuard)
  async assignRole(
    @Param('id') id: string,
    @Body() role: string,
  ): Promise<void> {
    await this.usersService.assignRole(parseInt(id), role);
  }
}
