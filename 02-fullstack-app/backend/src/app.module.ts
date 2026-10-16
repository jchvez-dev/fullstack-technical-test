import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
        'mongodb://admin:secret@mongo:27017/tareasdb?authSource=admin',
    ),
    TasksModule,
  ],
})
export class AppModule {}
