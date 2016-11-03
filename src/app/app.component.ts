import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Workbook } from '../pages/workbook/workbook';
import { HomePage } from '../pages/home/home';
import { NotesPage } from '../pages/notes/notes';
import { GoalsPage } from '../pages/goals/goals';

import {WorkbookService} from '../services/workbook.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  homePage: any = HomePage;
  goalsPage: any = GoalsPage;
  notesPage: any = NotesPage;

  workbooks: Array<{id: number, title: string}>;
  pages: Array<{id: number, title: string, component: any }>;

  constructor(public platform: Platform, private wbService: WorkbookService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.workbooks = wbService.getAll();
    this.pages = [
      {id: 1, title: 'Home', component: Page1},
      {id: 2, title: 'Notes', component: Page2},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPageById(id) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(Workbook,{id});
  }

  openPage(page){
      this.nav.setRoot(page);
  }
}
