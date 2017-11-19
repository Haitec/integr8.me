import { SkillOverviewPage } from './../skill-overview/skill-overview';
import { SkillService } from './skill.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

class Skill {
  id: number;
  name: string;
  score: number;
  challenges: Challenge[];
}

class Challenge {
  id: number;
  name: string;
  description: string;
  image_url: string;
  score: number;
}

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [SkillService]
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public service: SkillService
  ) {
  }

  skills: Skill[];
  mainSkillName: string;

  initializeItems() {
    this.skills = [];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SkillOverviewPage");
    this.service
      .get()
      .then(response => {
        this.skills = response.json() as Skill[];
        console.log(this.skills);
        //this.dismissLoading();
      })
      .catch(error => {
        this.initializeItems();
        //this.dismissLoading();
      });
  }

  openSkill(id: number, name: string) {
    this.navCtrl.push(SkillOverviewPage, {
      id: id,
      name: name
    });
  }

}
