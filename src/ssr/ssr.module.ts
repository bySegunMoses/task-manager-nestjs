import { Module } from '@nestjs/common';
import { SSRController } from './ssr.controller';
import { SSRService } from './ssr.service';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [SSRController],
  providers: [SSRService],
})
export class SSRModule {}
