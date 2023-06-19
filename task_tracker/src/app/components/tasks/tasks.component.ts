import { Component, OnInit } from '@angular/core';
import { newTask } from '../../models/newTask';
import { TaskService } from '../../services/task.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: newTask[] = [];

  constructor(
    private taskService: TaskService
  ) { }


  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: any) => (this.tasks = tasks));
  }


  deleteTask(task: any) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((d) => d.id !== task.id)));
  }

  addTask(task: newTask) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

  drop(event: CdkDragDrop<newTask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
