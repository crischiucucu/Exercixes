import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskService } from './task-manager/task.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
