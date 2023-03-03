import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DialogPopupComponent } from './components/dialog-popup/dialog-popup.component';
import { ViewTaskListComponent } from './components/view-task-list/view-task-list.component';
import { EnumeratePipe } from './pipes/enumerate.pipe';

@NgModule({
  declarations: [AppComponent, DialogPopupComponent, ViewTaskListComponent, EnumeratePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
