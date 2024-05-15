import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create Task' })
  @ApiResponse({
    status: 200,
    description: 'Task created successfully',
    type: Task,
  })
  @UseGuards(JwtAuthGuard)
  async create(@Body() createTaskDto: Partial<Task>): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Tasks' })
  @ApiResponse({
    status: 200,
    description: 'Tasks retrieved successfully',
    type: Task,
    isArray: true,
  })
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Task by ID' })
  @ApiResponse({
    status: 200,
    description: 'Task retrieved successfully',
    type: Task,
  })
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string): Promise<Task | undefined> {
    return this.tasksService.findOne(parseInt(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Task' })
  @ApiResponse({ status: 200, description: 'Task updated successfully' })
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: Partial<Task>,
  ): Promise<void> {
    await this.tasksService.update(parseInt(id), updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Task' })
  @ApiResponse({ status: 200, description: 'Task deleted successfully' })
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string): Promise<void> {
    await this.tasksService.remove(parseInt(id));
  }
}
