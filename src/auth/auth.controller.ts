import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from '../users/entities/user.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'User Registration' })
  @ApiResponse({
    status: 200,
    description: 'Registered successfully',
    type: User,
    schema: {
      example: {
        id: 1,
        username: 'example_user',
        email: 'example@example.com',
        phone: '+1234567890',
      },
    },
  })
  public async register(@Body() registerDto: RegisterDto): Promise<User> {
    return await this.authService.register(registerDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'User Login' })
  @ApiResponse({
    status: 200,
    description: 'Logged in successfully',
    type: User,
    schema: {
      example: {
        id: 1,
        username: 'example_user',
        email: 'example@example.com',
        phone: '+1234567890',
      },
    },
  })
  public async login(@Body() loginDto: LoginDto): Promise<any> {
    return await this.authService.login(loginDto);
  }
}
