import { Injectable } from '@angular/core';

interface workbook {
  id: number,
  title: string,
  goalsKey: string,
  goalsValue: string
}

const wbData: workbook[] = [
        { id:1, title: 'Relationships', goalsKey: 'wb_relationships', goalsValue: '' },
        { id:2, title: 'Professional', goalsKey: 'wb_professional', goalsValue: ''  },
        { id:3, title: 'Personal', goalsKey: 'wb_personal', goalsValue: ''   },
        { id:4, title: 'Spiritual', goalsKey: 'wb_spiritual', goalsValue: ''  }
      ]


@Injectable()
export class WorkbookService {
    private db;
    constructor() {  
      this.db = window.localStorage;
    }
   getAll(): workbook[] {
     return wbData;
   } 

   getItem(id: number): workbook {
      console.log(window.localStorage);
      return this.hydrate(this.getAll().find(wb => wb.id === id));
   }

   hydrate(ob: workbook): workbook{
      ob.goalsValue = this.db.getItem(ob.goalsKey);
      return ob;
   }

   saveGoals(ob: workbook): boolean{
     if(this.getItem(ob.id)){
       this.db.setItem(ob.goalsKey,ob.goalsValue);
       return true;
     }
     return false;
   }


}