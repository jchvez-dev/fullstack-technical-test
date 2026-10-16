import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: { createdAt: 'fechaCreacion', updatedAt: false } })
export class Task {
  @Prop({ required: true })
  titulo: string;

  @Prop({ default: '' })
  descripcion: string;

  @Prop({ default: false })
  completado: boolean;

  fechaCreacion?: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
