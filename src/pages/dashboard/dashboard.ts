import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { clamp } from "ionic-angular/util/util";

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
  templateUrl: "dashboard.html"
})
export class DashboardPage {
  jobs: Job[];
  expandedJobId: number;

  constructor(public navCtrl: NavController) {
    this.initializeItems();
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

  filterJobs(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.jobs = this.jobs.filter(job => {
        return job.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  toggleJob(i) {
    if (this.expandedJobId === i) {
      this.expandedJobId = -1;
    } else {
      this.expandedJobId = i;
    }
  }
}
