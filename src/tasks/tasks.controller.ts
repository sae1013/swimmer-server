import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './types/tasks.type';
import { CreateTaskDto } from './dto/tasks.interface';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  getTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
  @Post('/create')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }
}
