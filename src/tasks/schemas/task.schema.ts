// src/tasks/schemas/task.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ required: true, enum: ['low', 'medium', 'high'] })
  priority: string;

  @Prop({ enum: ['pending', 'in_progress', 'completed'], default: 'pending' })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
