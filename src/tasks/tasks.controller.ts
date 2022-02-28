import { Controller, Body, Post, Get, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { TaskStatus } from '../entity/task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskService } from './tasks.service';

@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Get()
    public async getAll() {
        const resp = await this.taskService.getAll();

        return resp;
    }

    @Get("/:id")
    public async getOne(@Param("id") taskId: number) {
        const resp = await this.taskService.getOne(taskId);

        return resp;
    }

    @Post()
    public async createOne(@Body() createTaskRequest: CreateTaskDTO) {
        const resp = await this.taskService.createOne(createTaskRequest);

        return resp;
    }

    @Put("/:id")
    public async updateOne(@Param("id") taskId: number, @Body() updateTaskRequest: UpdateTaskDTO) {
        const resp = await this.taskService.updateOne(taskId, updateTaskRequest);

        return resp;
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    public async deleteOne(@Param("id") taskId: number) {
        await this.taskService.deleteOne(taskId);
    }
}