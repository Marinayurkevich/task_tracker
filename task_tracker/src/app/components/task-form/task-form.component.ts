import { Component, Output, EventEmitter } from '@angular/core';
import { newTask } from '../../models/newTask';



@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() onAddTask: EventEmitter<newTask> = new EventEmitter();

  task: string = "";
  day: Date = new Date();

  onSubmit() {

    if (!this.task) {
      alert("Add new task, please!");
      return;
    }

    const newAddTask = {
      task: this.task,
      day: this.day,
    };


    this.onAddTask.emit(newAddTask);

    this.task = "";
    this.day = new Date();

  }


}
