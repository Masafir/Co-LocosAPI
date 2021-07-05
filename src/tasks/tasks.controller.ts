import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService : TasksService) {}

    @Get()
    getAllTasks() : Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get(':id')
    getTaskById(@Param('id') id : number) : Task {
        return this.tasksService.getTaskById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    createTask(@Body() createTaskDto : CreateTaskDto) : Task {
        return this.tasksService.createTask(createTaskDto);
    }

}
