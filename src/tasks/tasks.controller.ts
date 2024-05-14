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

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createTaskDto: Partial<Task>): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string): Promise<Task | undefined> {
    return this.tasksService.findOne(parseInt(id));
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: Partial<Task>,
  ): Promise<void> {
    await this.tasksService.update(parseInt(id), updateTaskDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string): Promise<void> {
    await this.tasksService.remove(parseInt(id));
  }
}
