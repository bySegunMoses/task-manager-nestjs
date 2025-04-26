import { Injectable } from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service';

@Injectable()
export class SSRService {
  constructor(private readonly tasksService: TasksService) {}

  async renderTasksPage() {
    const tasks = await this.tasksService.findAll({});
    return { tasks };
  }
}
