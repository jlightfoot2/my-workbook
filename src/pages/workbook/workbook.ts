import { Component } from '@angular/core';

import { NavController,NavParams,ModalController,ToastController } from 'ionic-angular';
import {WorkbookService} from '../../services/workbook.service';
import { Router } from '@angular/router';
import {Example as ExampleModal} from './example/example';

@Component({
  selector: 'workbook',
  templateUrl: 'workbook.html'
})
export class Workbook {
  public workbook;

  constructor(
    public navCtrl: NavController, 
    private wbService: WorkbookService, 
    public params: NavParams,
    public modalCtrl: ModalController,
    private toastCtrl: ToastController
    ) {

  }

  ngOnInit(): void {
    console.log(this.params.get('id'));
    this.workbook = this.wbService.getItem(this.params.get('id') || 1);
  }
  presentModal() {
    let modal = this.modalCtrl.create(ExampleModal,{examples: this.workbook.examples});
    modal.present();
  }
  wbSave(){

    this.wbService.saveGoals(this.workbook.goalsKey,this.workbook.goalsValue);

    let toast = this.toastCtrl.create({
      message: 'Your Goals were Saved',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
