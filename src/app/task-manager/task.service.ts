import { Injectable } from '@angular/core';

import { UUID } from 'angular2-uuid';

import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    const uuid = UUID.UUID();
    const newTask: Task = {
      id: uuid,
      name: task.name,
    };
    this.tasks.push(newTask);
  }

  removeTask(taskId: string) {
    const index = this.tasks.findIndex(element => element.id === taskId);

    this.tasks.splice(index, 1);
  }

}
