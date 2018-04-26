import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[];
  form: FormGroup;
  showErrors: boolean;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit() {
    this.initForm();
    this.tasks = this.taskService.getTasks();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  addTask() {
    if (this.form.invalid) {
      this.showErrors = true;

      return;
    }

    this.showErrors = false;
    this.taskService.addTask(this.form.value);
  }

  removeTask(id: string) {
    this.taskService.removeTask(id);
  }

  get name() { return this.form.get('name'); }

}
