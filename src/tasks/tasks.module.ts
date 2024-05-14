import { Module } from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service';
import { TasksController } from '../tasks/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), UsersModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
