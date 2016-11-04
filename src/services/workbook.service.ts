import { Injectable } from '@angular/core';

interface example {
  title: string,
  desc: string
}
interface workbook {
  id: number,
  title: string,
  goalsKey: string,
  goalsValue: string,
  examples: example[]
}

const wbData: workbook[] = [
        { id:1, title: 'Relationships', goalsKey: 'wb_relationships', goalsValue: '' , examples: [
          {title: 'Community', desc: '(Lead, Organize, Support Agencies, Volunteer, Cultural Arts)'},
          {title: 'Leisure', desc: '("Down Time," Activities, Sports, Vacations)"'},
          {title: 'Family',desc: ': (Prioritize, Quality Time, Special/Important Events)'},
          {title: 'Friendships',desc: '(Birthdays, Events, Interaction/Nurture)'},
          {title: 'Diversity',desc: '(Cultural Events, Exchanges, Tours)'},
          {title: 'Marital',desc: '(Anniversaries, Couples’ Retreats, Dating)'},
          {title: 'Work',desc: '(SAY THANK YOU, Challenge, Communicate, Support, Compassion)'}
        ]},
        { id:2, title: 'Professional', goalsKey: 'wb_professional', goalsValue: '', examples: [
          {title: 'Achievments & Awards', desc: '(Civilian and Military Awards)'},
          {title: 'Advancement & Promotion', desc: '(Professional Development, Leader Development)'},
          {title: 'Career Requirements', desc: '(Continuing Education, Certifica- tions, Licenses, Supervisory Training)'},
          {title: 'Education', desc: '(College, Graduate Degree, Correspondence Courses, Leadership Training, PMP)'},
          {title: 'Nominations', desc: '(Civilian of the Quarter and Year, Volunteer of Year)'},
          {title: 'Social Development', desc: '(Lunch with colleagues; potlucks)'},
          {title: 'Team Goals', desc: '(Section Accomplishments, Section Events, Awards for Excellence, Employee Recognition)'}
        ]},
        { id:3, title: 'Personal', goalsKey: 'wb_personal', goalsValue: '', examples: [
          {title: 'Activity', desc: ': (Overall Fitness, Yoga, 10,000 Steps Per Day)'},
          {title: 'Nutrition:', desc: '(Good Nutritional Choices, Reduce Fat Intake, Increase Fiber)'},
          {title: 'Sleep', desc: '(7-9 hrs/day, Good Sleep Hygiene, Limited Caffeine)'},
          {title: 'Community Service', desc: ': (USO, Red Cross, Habitat for Humanity)'},
          {title: 'Emotional Wellness', desc: '(Mindfulness, Lunch Away from Desk, Relaxation Techniques, Artistic Expression, Seek Help/Advice)'},
          {title: 'Financial Investment', desc: '(Savings Plan, Debt Reduction, Credit Management, Investment Plan)'},
          {title: 'Wellness Exams', desc: '(Physical Exam, Dental, Well-Woman Exam )'},
          {title: 'Cultural Awareness', desc: '(Celebrate Our Diversity, History, Travel)'},
          {title: 'Personal Health', desc: '(Responsible use of Alcohol, Tobacco Cessation, Stress Management, Meditation)'},
          {title: 'Recreational & Leisure', desc: '(Friends/Family, Hobbies, Travel)'}
        ]},
        { id:4, title: 'Spiritual', goalsKey: 'wb_spiritual', goalsValue: '' , examples: [
          {title: 'Growth', desc: '(Connect Actions and Goals to Values)'},
          {title: 'Ceremonies', desc: '(Religious, Marriage, Naming)'},
          {title: 'Participation', desc: '(Chapel Programs, Spiritual Fitness, Train- ing Events)'},
          {title: 'Holidays', desc: '(Observances, Meals, Fasting, etc.)'},
          {title: 'Study', desc: '(Tours, Reading, Classes)'},
          {title: 'Support', desc: '(Donations, Helping, Volunteerism)'}
        ]}
];
const notesConfig = {
  key: 'notes_key'
};

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

      return this.hydrate(this.getAll().find(wb => wb.id === id));
   }

   hydrate(ob: workbook): workbook{
      ob.goalsValue = this.db.getItem(ob.goalsKey);
      return ob;
   }

   saveGoals(key: string, nvalue: string): boolean{
       console.log('db insert called');
       console.log(nvalue);
       this.db.setItem(key,nvalue);
       return true;
   }

   getNotes(): string {
     return this.db.getItem(notesConfig.key) || ''
   }

   setNotes(notes: string){
      this.db.setItem(notesConfig.key,notes);
   }


}