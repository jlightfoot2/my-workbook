import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import {WorkbookService} from '../../services/workbook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'workbook',
  templateUrl: 'workbook.html'
})
export class Workbook {
  public workbook;
  constructor(public navCtrl: NavController, private wbService: WorkbookService, public params: NavParams) {

  }

  ngOnInit(): void {
    console.log(this.params.get('id'));
    this.workbook = this.wbService.getItem(this.params.get('id') || 1);
  }

}
