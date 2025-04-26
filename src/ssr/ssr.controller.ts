// src/ssr/ssr.controller.ts
import { Controller, Get, Render } from '@nestjs/common';
import { SSRService } from './ssr.service';

@Controller('ssr')
export class SSRController {
  constructor(private readonly ssrService: SSRService) {}

  @Get()
  @Render('tasks') // Render the 'tasks.pug' view
  async renderTasks() {
    return this.ssrService.renderTasksPage();
  }
}
