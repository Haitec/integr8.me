import { SkillOverviewPage } from './../skill-overview/skill-overview';
import { Component, OnInit } from "@angular/core";
import { NavController, Loading, LoadingController } from "ionic-angular";
import { clamp } from "ionic-angular/util/util";

import { DashboardService } from "./dashboard.service";

class Company {
  name: string;
}

class Skill {
  name: string;
  score: number;
}

class Job {
  id: number;
  title: string;
  favourite: boolean;
  company: Company;
  score: number;
  skills: Skill[];
}

@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html",
  providers: [DashboardService]
})
export class DashboardPage implements OnInit {
  jobs: Job[];
  expandedJobId: number;
  loader: Loading;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private service: DashboardService
  ) {}

  ngOnInit() {
    this.presentLoading();
    this.service
      .get()
      .then(response => {
        this.jobs = response.json() as Job[];
        this.dismissLoading();
      })
      .catch(error => {
        this.initializeItems();
        this.dismissLoading();
      });
  }

  initializeItems() {
    this.jobs = [];
  }

  toggleJob(i) {
    if (this.expandedJobId === i) {
      this.expandedJobId = -1;
    } else {
      this.expandedJobId = i;
    }
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  dismissLoading() {
    this.loader.dismiss();
  }

  favourite(isFavourite: boolean = true, jobId: number) {
    this.toggleJob(jobId);
    //this.presentLoading();
    this.service
      .favourite(isFavourite, jobId)
      .then(resp => {
        if (resp.ok)
          this.jobs.find(j => j.id === jobId).favourite = isFavourite;
        this.dismissLoading();
      })
      .catch(error => {
        console.log(error);
        this.dismissLoading();
      });
  }

  openSkill(id: number, name: string) {
    this.navCtrl.push(SkillOverviewPage, {
      id: id,
      name: name
    });
  }
}
