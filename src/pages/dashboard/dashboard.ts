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
  ) {
  }

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
    this.jobs = [
      {
        title: "PHP Developer",
        company: { name: "trivago" },
        score: 0.3,
        favourite: true,
        skills: [{ name: "PHP", score: 0.2 }, { name: "English", score: 0.5 }]
      },
      {
        title: "Java Developer",
        company: { name: "trivago" },
        score: 0.5,
        favourite: false,
        skills: [{ name: "Java", score: 0 }, { name: "English", score: 0 }]
      }
    ];
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
}
