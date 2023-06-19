import { Injectable } from '@angular/core';
import { newTask } from '../models/newTask';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject  } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API: string = 'http://localhost:5000/tasks';
  private data = new Subject<any>();



  constructor(
    private http: HttpClient,
  ) { }

  getTasks(): Observable<newTask[]> {
    return this.http.get<newTask[]>(this.API)
  }


  addTask(task: newTask): Observable<newTask> {
    return this.http.post<newTask>(this.API, task, httpOptions)
  }

  deleteTask(task: newTask): Observable<newTask>{
    const url = `${this.API}/${task.id}`;
    return this.http.delete<newTask>(url);
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
