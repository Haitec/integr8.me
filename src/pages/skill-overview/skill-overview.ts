import { SkillOverviewService } from "./skill-overview.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

class Skill {
  id: number;
  name: string;
  score: number;
  challenges: Challenge[];
}

class Challenge {
  id: number;
  name: string;
  score: number;
}
@Component({
  selector: "page-skill-overview",
  templateUrl: "skill-overview.html",
  providers: [SkillOverviewService]
})
export class SkillOverviewPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: SkillOverviewService
  ) {
    console.log(this.navParams);
    this.mainSkillName = this.navParams.data.name;
  }

  skills: Skill[];
  mainSkillName: string;

  initializeItems() {
    this.skills = [];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SkillOverviewPage");
    this.service
      .get(this.navParams.data.id)
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
}
