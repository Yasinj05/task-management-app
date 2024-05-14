import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(taskData: Partial<Task>): Promise<Task> {
    const task = this.taskRepository.create(taskData);
    return this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task | undefined> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTaskDto: Partial<Task>): Promise<void> {
    await this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
