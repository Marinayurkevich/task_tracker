import { Component, Input, Output, EventEmitter } from '@angular/core';
import { newTask } from '../../models/newTask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: newTask;
  @Output() onDeleteTask: EventEmitter<newTask> = new EventEmitter;

  faTimes = faTimes;

input = document.getElementById("day") as HTMLInputElement;
date: Date = new Date(this.input.value);

  constructor() {
    this.task = { task: '', day: this.date};
  }

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

}
