import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTaskListComponent } from './components/view-task-list/view-task-list.component';

const routes: Routes = [{ path: '', component: ViewTaskListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
