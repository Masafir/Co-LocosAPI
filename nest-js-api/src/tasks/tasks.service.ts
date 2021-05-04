import { NotFoundException } from '@nestjs/common';
import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import {v1 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {

    private tasks: Task[] = []

    getAllTasks(): Task[]{
        return this.tasks;
    }

    @UsePipes(ValidationPipe)
    getTaskById(id: number): Task {
        const task : Task = this.tasks.find((task) => task.id === id);
        if (!task){
            throw new NotFoundException();
        }
        return task;
    }

    createTask(createTask: CreateTaskDto): Task{
        const task: Task = {
            id: uuid(),
            name: createTask.name
        };
        this.tasks.push(task);
        return task;
    }

    updateTaskById(updateTask: UpdateTaskDto): Task {
        const task : Task = this.getTaskById(updateTask.id)
        if(!task){
            throw new NotFoundException();
        }
        task.name = updateTask.name;
        return task;
    }

}
