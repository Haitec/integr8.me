import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillOverviewPage } from './skill-overview';

@NgModule({
  declarations: [
    SkillOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillOverviewPage),
  ],
})
export class SkillOverviewPageModule {}
