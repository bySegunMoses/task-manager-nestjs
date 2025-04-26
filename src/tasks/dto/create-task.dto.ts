import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(['low', 'medium', 'high'])
  priority: string;

  @IsEnum(['pending', 'in_progress', 'completed'])
  @IsOptional()
  status?: string;
}
