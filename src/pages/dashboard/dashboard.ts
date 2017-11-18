import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

class Company {
  name: string;
}

class Job {
  title: string;
  favourite: boolean;
  company: Company;
  score: number;
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
        score: 0,
        favourite: true
      },
      {
        title: "Java Developer",
        company: { name: "trivago" },
        score: 0,
        favourite: false
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
