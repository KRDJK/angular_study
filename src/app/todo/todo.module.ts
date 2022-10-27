import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodosComponent, TodoComponent],
  providers: [], // 서비스들을 provide한다..? 서비스를 만들게 되면 사용한다고 함. 추후 학습 예정
  imports: [CommonModule, FormsModule],
  exports: [TodosComponent]
})
export class TodoModule { }
