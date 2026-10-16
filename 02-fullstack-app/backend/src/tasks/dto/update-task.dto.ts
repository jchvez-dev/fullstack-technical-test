/**
 *TODO: Try to use mapped types in test
 * import { PartialType } from '@nestjs/mapped-types';
 * import { CreateTaskDto } from './create-task.dto';
 *  export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
 */
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  titulo?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  completado?: boolean;
}