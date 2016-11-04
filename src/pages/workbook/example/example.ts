import { Component } from '@angular/core';

import { NavController,NavParams,ViewController } from 'ionic-angular';
import {WorkbookService} from '../../../services/workbook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'workbook-example',
  templateUrl: 'example.html'
})
export class Example {
  public examples;
  
  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,public params: NavParams) {

  }

  ngOnInit(): void {
    this.examples = this.params.get('examples') || [];
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
