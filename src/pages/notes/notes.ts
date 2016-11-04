import { Component } from '@angular/core';
import {WorkbookService} from '../../services/workbook.service';
import { NavController,NavParams,ModalController,ToastController } from 'ionic-angular';

@Component({
  selector: 'notes-page',
  templateUrl: 'notes.html'
})
export class NotesPage {
  public notes: string = '';
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
    this.notes = this.wbService.getNotes();
  }

  saveNotes(){
    var notes = this.notes;
    this.wbService.setNotes(notes);

    let toast = this.toastCtrl.create({
      message: 'Your Notes were saved',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }
}
