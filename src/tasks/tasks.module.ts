import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/entity/task.entity';
import { TaskController } from './tasks.controller';
import { TaskService } from './tasks.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Task])
  ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TasksModule {}
