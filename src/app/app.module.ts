import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Workbook } from '../pages/workbook/workbook';
import { HomePage } from '../pages/home/home';
import { NotesPage } from '../pages/notes/notes';
import { GoalsPage } from '../pages/goals/goals';
import {WorkbookService} from '../services/workbook.service';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    NotesPage,
    GoalsPage,
    Workbook
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    NotesPage,
    GoalsPage,
    Workbook
  ],
  providers: [WorkbookService]
})
export class AppModule {}
