import { Injectable } from '@nestjs/common';
import { Task } from './types/tasks.type';
import { CreateTaskDto } from './dto/tasks.interface';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask({ title, content }: CreateTaskDto) {
    const newTask = { id: '1', author: 'hjw', title, content };
    this.tasks.push(newTask);
    return newTask;
  }
}
